<script setup lang="ts">
import { useApp } from "~/composables";
import { IReceiptExecutionResources } from "~/interfaces";
import { PropType } from "vue";

/**
 * props
 */

defineProps({
	resources: {
		type: Object as PropType<IReceiptExecutionResources>,
		required: true,
		default: undefined,
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
	<div class="flex flex-col items-end w-full bg-gradient-to-tr from-gray-800/20 via-blue-400/10 to-cyan-400/30 rounded-xl">
		<button
			class="flex justify-between items-center w-full py-4 px-8 cursor-pointer"
			:class="{ 'cursor-not-allowed': !resources }"
			:disabled="!resources"
			@click="isCollapsed = !isCollapsed"
		>
			<p v-if="resources" class="wsc-text-starknet-orange">Resources</p>
			<p v-else class="wsc-text-default">No resource</p>
		</button>
		<Collapse v-if="resources" :is-collapsed="isCollapsed">
			<transition name="fade" mode="out-in">
				<div
					v-show="isCollapsed"
					class="mx-4 mb-4 flex flex-col border-1 wsc-border-default wsc-transition-all rounded-2xl px-6 py-3 bg-blue-gray-700 bg-opacity-20 gap-2 relative"
				>
					<pre>{{ resources }}</pre>
				</div>
			</transition>
		</Collapse>
	</div>
</template>
