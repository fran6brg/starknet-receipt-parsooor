<script setup lang="ts">
import { useApp } from "~/composables";
import { ITransactionReceipt } from "~/interfaces";
import { PropType } from "vue";
import ReceiptParsedResources from "./ReceiptParsedResources.vue";

/**
 * props
 */

defineProps({
	receipt: {
		type: Object as PropType<ITransactionReceipt>,
		required: true,
		default: null,
	},
});

/**
 * state
 */

// imports
const { state } = useApp();

// refs
// computeds
// watchers
// hooks
onErrorCaptured((error) => {
	state.error = new Error(JSON.stringify(error));
	console.warn("component/receiptparsed", error);
});
</script>

<template>
	<div class="flex flex-col gap-6">
		<!-- block -->
		<div class="flex gap-6">
			<div class="flex flex-col gap-1">
				<p class="wsc-text-default">block_hash</p>
				<AddressDesigned v-if="receipt.block_hash" :address="receipt.block_hash" type="block" />
				<p v-else>none</p>
			</div>
			<div class="flex flex-col gap-1">
				<p class="wsc-text-default">block_number</p>
				<div class="h-full flex items-center">
					<p v-if="receipt.block_number">{{ receipt.block_number }}</p>
					<p v-else>none</p>
				</div>
			</div>
		</div>

		<!-- tx -->
		<div
			class="flex flex-col gap-4 border-1 p-3 rounded-xl"
			:class="{
				'wsc-border-success': receipt.status === 'ACCEPTED_ON_L1',
				'wsc-border-error border-opacity-50': receipt.status !== 'ACCEPTED_ON_L1',
			}"
		>
			<!-- general  -->
			<div class="flex gap-6">
				<div class="flex flex-col gap-1">
					<p class="wsc-text-default">status</p>
					<div class="h-full flex items-center gap-2">
						<!-- <Pulse v-if="receipt.status === 'ACCEPTED_ON_L1'" />
						<Pulse v-else variant="warning" /> -->
						<p :class="{ 'wsc-text-success': receipt.status === 'ACCEPTED_ON_L1', 'wsc-text-error': receipt.status === 'REJECTED' }">
							{{ receipt.status }}
						</p>
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<p class="wsc-text-default">transaction_hash</p>
					<AddressDesigned v-if="receipt.transaction_hash" type="tx" :address="receipt.transaction_hash" />
					<p v-else>none</p>
				</div>
				<div class="flex flex-col gap-1">
					<p class="wsc-text-default">transaction_index</p>
					<div class="h-full flex items-center">
						<p v-if="receipt.transaction_index">{{ receipt.transaction_index }}</p>
						<p v-else>none</p>
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<p class="wsc-text-default">actual_fee</p>
					<div class="h-full flex items-center">
						<p v-if="receipt.actual_fee">{{ receipt.actual_fee }}</p>
						<p v-else>none</p>
					</div>
				</div>
			</div>

			<!-- messages -->
			<ReceiptParsedMessages :messages="receipt.messages" />

			<!-- events -->
			<ReceiptParsedEvents :events="receipt.events" />

			<!-- resources -->
			<ReceiptParsedResources v-if="receipt.execution_resources" :resources="receipt.execution_resources" />

			<!-- errors -->
			<ReceiptParsedError v-if="receipt.transaction_failure_reason" :error="receipt.transaction_failure_reason" />
		</div>
	</div>
</template>
