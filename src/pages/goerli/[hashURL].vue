<script setup lang="ts">
import Receipt from "~/components/Receipt/Receipt.vue";
import HashInput from "~/components/System/HashInput.vue";

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
// refs
const hash = ref("");
const hashError = ref("");
// computeds
const askForHash = computed((): boolean => props.hashURL === "insert-your-transaction-hash-here");
// watchers
// hooks
onMounted(() => (hash.value = askForHash.value ? "" : props.hashURL));
onErrorCaptured((error) => console.warn("pages/TxHash", error));

/**
 * methods
 */

const handleHashValueChange = (value: string): void => {
	console.log("handleHashValueChange", { value });
	hashError.value = "";
	hash.value = value;
};
</script>

<template>
	<Page>
		<HashInput placeholder="Transaction hash 0x[hex]" :value="hash" class="w-140" @update:value="handleHashValueChange($event)" />
		<PageContent>
			<p v-if="!hash">Enter a transaction hash ⬆️</p>
			<Suspense v-else>
				<!-- main content -->
				<Receipt :hash="hash" />

				<!-- loading state -->
				<template #fallback>Loading receipt...</template>
			</Suspense>
		</PageContent>
	</Page>
</template>
