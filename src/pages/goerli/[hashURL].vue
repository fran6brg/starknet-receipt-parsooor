<script setup lang="ts">
import Receipt from "~/components/Receipt/Receipt.vue";
import HashInput from "~/components/System/HashInput.vue";
import { useApp } from "~/composables";

/**
 * constants
 */

const receiptError = "0x51ee32b852d72a4d2da22e3c9e12cf22528ef1d913013b7f15cfbcad3a1de27";
const receiptL1toL2 = "0x1569d668b378747f7768e2931105b3e1baca2b03d0f0f12a4c10dd94edca20c";
const receiptFake = "0x063c35a1b63c7bd7cb158ed3734309b9bb1b6da0af9f7c66074e71f6952b0e94";

/**
 * props
 */

const props = defineProps({
	hashURL: {
		type: String,
		required: true,
		default: "",
	},
});
console.log("[hashURL].vue", props.hashURL);

/**
 * state
 */

// imports
const { state } = useApp();
// refs
const hash = ref(props.hashURL === "insert-your-transaction-hash-here" ? "" : props.hashURL);
const hashError = ref("");
const router = useRouter();
// computeds
// watchers
// hooks
onErrorCaptured((error) => console.warn("pages/hashURL", error));

/**
 * methods
 */

const handleHashValueChange = ({ value, error }: { value: string; error: string }): void => {
	if (error) hashError.value = error;
	else {
		hashError.value = "";
		hash.value = value;
		router.push(`/goerli/${hash.value}`);
	}
};
</script>

<template>
	<Page>
		<!-- dev only -->
		<div v-if="state.env === 'dev'" class="flex gap-2 text-xs">
			<button class="p-2 border-1" @click="hash = receiptError">error</button>
			<button class="p-2 border-1" @click="hash = receiptL1toL2">l2 -> l1</button>
			<button class="p-2 border-1" @click="hash = receiptFake">fake tx</button>
		</div>

		<!-- form -->
		<HashInput placeholder="right there my fren" :value="hash" :error="hashError" class="w-140" @update:value="handleHashValueChange($event)" />

		<!-- receipt -->
		<PageContent>
			<div v-if="state.error" class="flex flex-col gap-2">
				<p>
					Some error occured while querying
					<span class="italic">{{ `https://alpha4.starknet.io/feeder_gateway/get_transaction_receipt?transactionHash=${hash}` }}</span>
				</p>
				<pre class="wsc-text-error">{{ state.error }}</pre>
				<p>sry fren, u can still dm us on twitter for help</p>
			</div>
			<Suspense v-else-if="hash && !hashError" :key="hash">
				<!-- main content -->
				<Receipt :hash="hash" />

				<!-- loading state -->
				<template #fallback>Fetching receipt...(sometimes you must be patient)</template>
			</Suspense>
			<p v-else-if="!hash">paste your hash (0x42...42) in the form ⬆️</p>
		</PageContent>
	</Page>
</template>
