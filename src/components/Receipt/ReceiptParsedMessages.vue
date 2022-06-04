<script setup lang="ts">
import { useApp } from "~/composables";
import { IReceiptL2ToL1Messages } from "~/interfaces";
import { PropType } from "vue";

/**
 * props
 */

defineProps({
	messages: {
		type: Object as PropType<IReceiptL2ToL1Messages>,
		required: true,
		default: () => [],
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
	console.warn("component/receiptparsedmessages", error);
});
</script>

<template>
	<div class="flex flex-col items-end w-full bg-gradient-to-tr from-gray-800/20 via-blue-400/10 to-emerald-400/10 rounded-xl">
		<button
			class="flex justify-between items-center w-full py-4 px-8 cursor-pointer"
			:class="{ 'cursor-not-allowed': !messages.length }"
			:disabled="!messages.length"
			@click="isCollapsed = !isCollapsed"
		>
			<p v-if="messages.length" class="wsc-text-starknet-orange">{{ messages.length }} message{{ messages.length ? "s" : "" }}</p>
			<p v-else class="wsc-text-default">No message</p>
		</button>
		<Collapse v-if="messages.length" :is-collapsed="isCollapsed">
			<transition name="fade" mode="out-in">
				<div
					v-show="isCollapsed"
					class="mx-4 mb-4 flex flex-col border-1 wsc-border-default wsc-transition-all rounded-2xl px-6 py-3 bg-blue-gray-700 bg-opacity-20 gap-2 relative"
				>
					<pre>{{ messages }}</pre>
				</div>
			</transition>
		</Collapse>
	</div>
</template>
