<script setup lang="ts">
import Receipt from "~/components/Receipt/Receipt.vue";

/**
 * props
 */

defineProps({
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
// refs
// computeds
// watchers
// hooks
onErrorCaptured((error) => {
	console.warn("pages/TxHash", error);
});
</script>

<template>
	<Page>
		<PageContent class="text-xs">
			<Suspense>
				<!-- main content -->
				<Receipt :hash="hash" />

				<!-- loading state -->
				<template #fallback> Loading... </template>
			</Suspense>
		</PageContent>
	</Page>
</template>
