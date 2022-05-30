<script setup lang="ts">
import Receipt from "~/components/Receipt/Receipt.vue";

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
console.log("[hash].vue", props.hash);

/**
 * state
 */

// imports
// refs
const askForHash = computed((): boolean => props.hash === "insert-your-transaction-hash-here");

// computeds
// watchers
// hooks
onErrorCaptured((error) => {
	console.warn("pages/TxHash", error);
});
</script>

<template>
	<Page>
		<PageContent>
			<p v-if="askForHash">Insert a transaction hash in the URL ⬆️</p>
			<Suspense v-else>
				<!-- main content -->
				<Receipt :hash="hash" />

				<!-- loading state -->
				<template #fallback>Loading...</template>
			</Suspense>
		</PageContent>
	</Page>
</template>
