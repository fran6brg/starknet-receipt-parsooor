<template>
	<div class="min-w-16 font-ptmono">
		<p v-if="ens">{{ ens }}</p>
		<p v-else-if="formatAddress(address).startsWith('0x')">{{ formatAddress(address) }}</p>
		<p v-else class="wsc-text-warning">Invalid address</p>
	</div>
</template>

<script setup lang="ts">
/**
 * props
 */

defineProps({
	address: {
		type: String as () => string,
		required: false,
		default: null,
	},
	ens: {
		type: String as () => string,
		required: false,
		default: null,
	},
	copy: {
		type: Boolean as () => boolean,
		required: false,
		default: true,
	},
});

/**
 * reactive
 */

// imports
// refs
// computeds
// watchers

/**
 * methods
 */

const formatAddress = (address: string): string => {
	if (!address) return "Invalid address";
	if (!address.startsWith("0x")) return "Invalid address";
	if (address.length < 40) return "Invalid address";
	return `${address.substring(0, 6).toLowerCase()}...${address.substr(-4).toLowerCase()}`;
};
</script>
