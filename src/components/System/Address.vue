<template>
	<div class="min-w-16 font-ptmono" :class="{ 'hover:cursor-pointer': copy }" @click="copyAddress(address)">
		<p v-if="copied">Copied!</p>
		<p v-else-if="ens">{{ ens }}</p>
		<p v-else-if="formatAddress(address).startsWith('0x')" class="wsc-text-from">{{ formatAddress(address) }}</p>
		<p v-else class="wsc-text-error">Invalid address</p>
	</div>
</template>

<script setup lang="ts">
/**
 * props
 */

const props = defineProps({
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
const { copy: runCopy, copied } = useClipboard({ source: props.address });
// refs
// computeds
// watchers

/**
 * methods
 */

const copyAddress = (address: string): void => {
	if (props.copy) runCopy(address);
};

const formatAddress = (address: string): string => {
	if (!address) return "Invalid address";
	if (!address.startsWith("0x")) return "Invalid address";
	return `${address.substring(0, 6).toLowerCase()}...${address.substr(-4).toLowerCase()}`;
};
</script>
