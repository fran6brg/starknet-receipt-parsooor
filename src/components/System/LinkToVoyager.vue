<script setup lang="ts">
import { useApp } from "~/composables";

/**
 * props
 */

defineProps({
	type: {
		type: String,
		required: false,
		default: "tx",
		validator: (value: string) => ["contract", "block", "tx"].includes(value),
	},
	value: {
		type: String,
		required: false,
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

/**
 * methods
 */
</script>

<template>
	<a :href="`https://${state.network}.voyager.online/${type}/${value}`" target="_blank" rel="noopener">
		<slot />
	</a>
</template>
