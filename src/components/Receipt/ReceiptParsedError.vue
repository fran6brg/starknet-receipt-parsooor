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
	console.warn("component/errorparsederror", error);
});
</script>

<template>
	<div
		class="flex flex-col items-end w-full rounded-xl"
		:class="{
			'bg-gradient-to-bl from-blue-800/20 via-blue-400/10 to-orange-400/20': receipt?.transaction_failure_reason,
			'wsc-bg-default bg-opacity-20': !receipt?.transaction_failure_reason,
		}"
	>
		<button
			class="flex justify-between items-center w-full py-4 px-8 cursor-pointer"
			:class="{ 'cursor-not-allowed': !receipt?.transaction_failure_reason }"
			:disabled="!receipt?.transaction_failure_reason"
			@click="isCollapsed = !isCollapsed"
		>
			<p v-if="receipt?.transaction_failure_reason" class="wsc-text-starknet-orange">Error</p>
			<p v-else class="wsc-text-default">No error</p>
		</button>
		<Collapse v-if="receipt?.transaction_failure_reason" :is-collapsed="isCollapsed">
			<transition name="fade" mode="out-in">
				<div
					v-show="isCollapsed"
					class="mx-4 mb-4 flex flex-col border-1 wsc-border-default wsc-transition-all rounded-2xl p-3 bg-blue-gray-700 bg-opacity-20 gap-4 relative"
				>
					<!-- row -->
					<div class="flex flex-col gap-1">
						<p class="wsc-text-default underline">code:</p>
						<div class="h-full flex items-center">
							<p v-if="receipt?.transaction_failure_reason.code">{{ receipt?.transaction_failure_reason.code }}</p>
							<p v-else>none</p>
						</div>
					</div>

					<!-- row -->
					<div class="flex flex-col gap-1">
						<p class="wsc-text-default underline">error_message:</p>
						<div class="h-full flex items-center">
							<p
								v-if="receipt?.transaction_failure_reason.error_message"
								v-html="receipt?.transaction_failure_reason.error_message.replace(/(?:\r\n|\r|\n)/g, '<br />')"
							/>
							<p v-else>none</p>
						</div>
					</div>
				</div>
			</transition>
		</Collapse>
	</div>
</template>
