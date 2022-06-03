<script setup lang="ts">
import { useApp, useGateway } from "~/composables";
import { ITransactionReceipt } from "~/interfaces";
import L2toL1message from "../App/Receipt/L2toL1message.vue";
import StarknetLogo from "../Logos/StarknetLogo.vue";

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
			<!-- actions -->
			<div class="flex gap-4">
				<button @click="showRaw = false">
					<p class="opacity-50" :class="{ 'underline opacity-100': !showRaw }">Parsed</p>
				</button>
				<button @click="showRaw = true">
					<p class="opacity-50" :class="{ 'underline opacity-100': showRaw }">Raw</p>
				</button>
			</div>

			<!-- voyager link -->
			<a
				:href="`https://goerli.voyager.online/tx/${props.hash}`"
				rel="nofollow noopener"
				target="_blank"
				class="flex gap-1 items-center group opacity-50"
			>
				<p class="flex items-center text-xs truncate">
					open in <span class="group-hover:underline mx-1.5">goerli.voyager.online</span> <StarknetLogo class="w-4 h-4" />
				</p>
			</a>
		</div>

		<!-- raw -->
		<div v-if="showRaw" class="h-max flex flex-col gap-2 overflow-y-scroll border-1 border-gray-600 border-opacity-50 py-2 px-3 rounded-lg my-2">
			<pre>{{ receipt }}</pre>
		</div>

		<!-- formatted -->
		<div v-else class="flex flex-col gap-2 h-90 overflow-y-scroll border-1 border-gray-600 border-opacity-50 py-2 px-3 rounded-lg my-2">
			<div v-for="(key, kIndex) in Object.keys(receipt)" :key="`${kIndex}-${key}`" class="wsc-text-default">
				<pre v-if="showRaw">{{ key }} = {{ receipt[key] }}</pre>
				<div v-else class="flex flex-col gap-1">
					<!-- hash -->
					<div v-if="key === 'transaction_hash'" class="key-value">
						<p class="key">{{ key }}:</p>
						<div class="value">
							<p>{{ receipt[key] }}</p>
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
