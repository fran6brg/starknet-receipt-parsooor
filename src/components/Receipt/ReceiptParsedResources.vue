<script setup lang="ts">
import { useApp } from "~/composables";
import { ITransactionReceipt } from "~/interfaces";
import { PropType } from "vue";

/**
 * props
 */

defineProps({
	receipt: {
		type: Object as PropType<ITransactionReceipt>,
		required: true,
		default: () => undefined,
	},
});

/**
 * state
 */

// imports
const { state } = useApp();

// refs
const isCollapsed = ref(false);
// computeds
// watchers
// hooks
onErrorCaptured((error) => {
	state.error = new Error(JSON.stringify(error));
	console.warn("component/receiptparsedresources", error);
});
</script>

<template>
	<div
		class="flex flex-col items-end w-full rounded-xl"
		:class="{
			'bg-gradient-to-tr from-blue-800/20 via-blue-400/10 to-orange-400/20': receipt?.execution_resources,
			'wsc-bg-default bg-opacity-20': !receipt?.execution_resources,
		}"
	>
		<button
			class="flex justify-between items-center w-full py-4 px-8 cursor-pointer"
			:class="{ 'cursor-not-allowed': !receipt?.execution_resources }"
			:disabled="!receipt?.execution_resources"
			@click="isCollapsed = !isCollapsed"
		>
			<p v-if="receipt?.execution_resources" class="wsc-text-starknet-orange">Resources</p>
			<p v-else class="wsc-text-default">No resources</p>
		</button>
		<Collapse v-if="receipt?.execution_resources" :is-collapsed="isCollapsed">
			<transition name="fade" mode="out-in">
				<div
					v-show="isCollapsed"
					class="mx-4 mb-4 flex flex-col border-1 wsc-border-default wsc-transition-all rounded-2xl p-3 bg-blue-gray-700 bg-opacity-20 gap-2 relative"
				>
					<pre>{{ receipt?.execution_resources }}</pre>
				</div>
			</transition>
		</Collapse>
	</div>
</template>
