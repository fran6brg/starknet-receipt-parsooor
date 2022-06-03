<script setup lang="ts">
import { useApp } from "~/composables";
import { ITransactionReceipt } from "~/interfaces";
import L2toL1message from "../App/Receipt/L2toL1message.vue";
import { PropType } from "vue";

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
	<div class="">
		<div v-for="(key, kIndex) in Object.keys(receipt)" :key="`${kIndex}-${key}`" class="wsc-text-default">
			<div class="flex flex-col gap-1">
				<!-- block -->
				<div v-if="key === 'block_hash'" class="key-value">
					<p class="key">{{ key }}:</p>
					<div class="value">
						<AddressDesigned type="tx" :address="receipt[key]" />
					</div>
				</div>

				<!-- tx -->
				<div v-if="key === 'transaction_hash'" class="key-value">
					<p class="key">{{ key }}:</p>
					<div class="value">
						<AddressDesigned type="tx" :address="receipt[key]" />
					</div>
				</div>

				<!-- status -->
				<div v-if="key === 'status'" class="key-value">
					<p class="key">{{ key }}:</p>
					<div class="value">
						<p>{{ receipt[key] }}</p>
						<Pulse v-if="receipt[key] === 'ACCEPTED_ON_L1'" />
						<Pulse v-if="receipt[key] !== 'ACCEPTED_ON_L1'" variant="warning" />
					</div>
				</div>

				<!-- l2_to_l1_messages -->
				<div v-else-if="key === 'l2_to_l1_messages'" class="key-value">
					<p class="key">{{ key }}:</p>
					<div class="value">
						<p v-if="!receipt.l2_to_l1_messages.length">{{ receipt[key] }}</p>
						<L2toL1message
							v-for="(msg, mIndex) in receipt.l2_to_l1_messages"
							:key="`${mIndex}-${msg}`"
							:message="msg"
							class="flex flex-col gap-1"
						/>
					</div>
				</div>

				<!-- error -->
				<div v-else-if="key === 'transaction_failure_reason'" class="key-value">
					<p class="key">{{ key }}:</p>
					<div class="value">
						<p
							v-if="receipt.transaction_failure_reason.error_message"
							v-html="receipt.transaction_failure_reason.error_message.replace(/(?:\r\n|\r|\n)/g, '<br />')"
						/>
					</div>
				</div>

				<!-- fallback -->
				<!-- <div v-else class="key-value">
						<p class="key">{{ key }}:</p>
						<div class="value">
							<p>{{ receipt[key] }}</p>
						</div>
					</div> -->
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.key-value {
	@apply flex gap-2 items-center;
	.key {
		@apply wsc-text-gradient-r;
	}
	.value {
		@apply flex gap-2 items-center flex-grow;
	}
}
</style>
