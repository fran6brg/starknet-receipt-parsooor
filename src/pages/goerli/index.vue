<script setup lang="ts">
import { useApp } from "~/composables";

/**
 * state
 */

// imports
const { state } = useApp();
const router = useRouter();

router.push(`/goerli/insert-your-transaction-hash-here`);
// refs
// computeds
// watchers
// hooks
</script>

<template>
	<Page>
		<PageContent>
			<pre v-if="state.error">{{ state.error }}</pre>
		</PageContent>
	</Page>
</template>
