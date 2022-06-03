<script setup lang="ts">
/**
 * props
 */

defineProps({
	type: {
		type: String,
		required: false,
		default: null,
		validator: (value: string) => ["contract", "block", "tx"].includes(value),
	},
	network: {
		type: String,
		required: false,
		default: "goerli",
		validator: (value: string) => ["goerli", "mainnet"].includes(value),
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
// refs
// computeds
// watchers

/**
 * methods
 */
</script>

<template>
	<a :href="`https://${network}.voyager.online/${type}/${value}`" target="_blank" rel="noopener">
		<slot />
	</a>
</template>
