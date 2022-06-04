<script setup lang="ts">
import { useApp } from "~/composables";
import { IReceiptTransactionFailureReason } from "~/interfaces";
import { PropType } from "vue";

/**
 * props
 */

defineProps({
	error: {
		type: Object as PropType<undefined | IReceiptTransactionFailureReason>,
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
	console.warn("component/receiptparsederror", error);
});
</script>

<template>
	<div class="flex flex-col items-end w-full bg-gradient-to-tr from-gray-800/20 via-blue-400/10 to-cyan-400/30 rounded-xl">
		<button
			class="flex justify-between items-center w-full py-4 px-8 cursor-pointer"
			:class="{ 'cursor-not-allowed': !error }"
			:disabled="!error"
			@click="isCollapsed = !isCollapsed"
		>
			<p v-if="error" class="wsc-text-starknet-orange">Error</p>
			<p v-else class="wsc-text-default">No error</p>
		</button>
		<Collapse v-if="error" :is-collapsed="isCollapsed">
			<transition name="fade" mode="out-in">
				<div
					v-show="isCollapsed"
					class="mx-4 mb-4 flex flex-col border-1 wsc-border-default wsc-transition-all rounded-2xl px-6 py-3 bg-blue-gray-700 bg-opacity-20 gap-4 relative"
				>
					<!-- row -->
					<div class="flex flex-col gap-1">
						<p class="wsc-text-default underline">error_code:</p>
						<div class="h-full flex items-center">
							<p v-if="error.error_code">{{ error.error_code }}</p>
							<p v-else>none</p>
						</div>
					</div>

					<!-- row -->
					<div class="flex flex-col gap-1">
						<p class="wsc-text-default underline">error_message:</p>
						<div class="h-full flex items-center">
							<p v-if="error.error_message" v-html="error.error_message.replace(/(?:\r\n|\r|\n)/g, '<br />')" />
							<p v-else>none</p>
						</div>
					</div>
				</div>
			</transition>
		</Collapse>
	</div>
</template>
