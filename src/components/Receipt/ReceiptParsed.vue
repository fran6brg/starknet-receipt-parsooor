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
const statusInfo = ref(
	"<p class='text-xs'>ACCEPTED_ON_L1: Your transaction has been settled on L1.<br /><br />REJECTED: Your transaction is is invalid. Check the error section.<br /><br />RECEIVED: Your transaction has been received on the L2 network and is being processed.</p>",
);
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
		<div class="flex <md:flex-col gap-6 h-12">
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
			<div class="flex flex-col gap-1">
				<p class="wsc-text-default">timestamp</p>
				<div class="h-full flex items-center">
					<p class="opacity-50">soon</p>
				</div>
			</div>
		</div>

		<!-- tx -->
		<div
			class="flex flex-col gap-4 border-1 p-3 rounded-xl"
			:class="{
				'wsc-border-success': receipt.status === 'ACCEPTED_ON_L1',
				'wsc-border-default': receipt.status !== 'RECEIVED',
				'wsc-border-error border-opacity-50': receipt.status === 'REJECTED',
			}"
		>
			<!-- general  -->
			<div class="flex <md:flex-col gap-6 h-12">
				<div class="flex flex-col gap-1">
					<div class="flex gap-1.5">
						<p class="wsc-text-default">status</p>
						<Information :content="statusInfo" />
					</div>
					<div class="h-full flex items-center gap-2">
						<p
							:class="{
								'wsc-text-success': receipt.status === 'ACCEPTED_ON_L1',
								'wsc-text-default': receipt.status === 'RECEIVED',
								'wsc-text-error': receipt.status === 'REJECTED',
							}"
						>
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
			<ReceiptParsedMessages :messages="receipt.l2_to_l1_messages" />

			<!-- events -->
			<ReceiptParsedEvents :events="receipt.events" />

			<!-- resources -->
			<ReceiptParsedResources :receipt="receipt" />

			<!-- errors -->
			<ReceiptParsedError :receipt="receipt" />
		</div>
	</div>
</template>
