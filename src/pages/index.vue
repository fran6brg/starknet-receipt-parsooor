<script setup lang="ts">
import { useApp } from "~/composables";

/**
 * state
 */

// imports
const { state } = useApp();

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
