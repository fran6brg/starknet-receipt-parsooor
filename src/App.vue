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
onErrorCaptured((error) => {
	state.error = new Error(JSON.stringify(error));
	console.warn("pages/App", error);
});
useHead({
	title: "starknet receipt parsooor",
	meta: [
		{
			name: "starknet receipt parsooor",
			content: "starknet receipt parsooor",
		},
	],
});
</script>

<template>
	<router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap");
</style>
