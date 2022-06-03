<script setup lang="ts">
import { useApp, useGateway } from "~/composables";
import { ITransactionReceipt } from "~/interfaces";

/**
 * props
 */

const props = defineProps({
	hash: {
		type: String,
		required: true,
		default: "",
	},
});

/**
 * state
 */

// imports
const { state } = useApp();
const { getTxStatus } = useGateway();

// refs
const showRaw = ref(false);
const receipt = ref<null | ITransactionReceipt>(await getTxStatus(props.hash.toLowerCase()));

// computeds
// watchers
// hooks
onErrorCaptured((error) => {
	state.error = new Error(JSON.stringify(error));
	console.warn("component/receipt", error);
});
</script>

<template>
	<div v-if="receipt" class="h-full flex flex-col">
		<div class="px-2 flex justify-between items-center">
			<!-- format selector -->
			<div class="flex gap-4">
				<button @click="showRaw = false">
					<p class="opacity-50" :class="{ 'underline opacity-100': !showRaw }">PaRsEd</p>
				</button>
				<button @click="showRaw = true">
					<p class="opacity-50" :class="{ 'underline opacity-100': showRaw }">raw</p>
				</button>
			</div>

			<!-- tx link -->
			<LinkToVoyager type="tx" :address="props.hash" class="flex gap-1 items-center group opacity-50">
				<p class="flex items-center text-xs truncate">
					open in <span class="group-hover:underline mx-1.5">goerli.voyager.online</span> <StarknetLogo class="w-4 h-4" />
				</p>
			</LinkToVoyager>
		</div>

		<!-- formats -->
		<div
			class="h-max mb-20 flex flex-col gap-2 overflow-y-scroll border-1 py-2 px-3 rounded-xl my-2 wsc-bg-default bg-opacity-50"
			:class="{
				'wsc-border-success': receipt.transaction_status === 'ACCEPTED_ON_L1',
				'wsc-border-default border-opacity-20': receipt.transaction_status !== 'ACCEPTED_ON_L1',
			}"
		>
			<!-- raw -->
			<pre v-if="showRaw">{{ receipt }}</pre>

			<!-- parsed -->
			<ReceiptParsed v-else :receipt="receipt" />
		</div>
	</div>
</template>
