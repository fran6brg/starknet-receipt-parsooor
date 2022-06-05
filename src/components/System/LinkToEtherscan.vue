<script setup lang="ts">
/**
 * props
 */

defineProps({
	type: {
		type: String,
		required: false,
		default: "address",
		validator: (value: string) => ["address"].includes(value),
	},
	address: {
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
	<a :href="`https://goerli.etherscan.io/address/${address}`" target="_blank" rel="noopener">
		<slot />
	</a>
</template>
