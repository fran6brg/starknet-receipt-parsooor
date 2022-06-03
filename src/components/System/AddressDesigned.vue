<script setup lang="ts">
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
	address: {
		type: String as () => string,
		required: true,
		default: null,
	},
	size: {
		type: String,
		required: false,
		default: "xs",
		validator: (size: string) => ["xs", "sm", "md"].includes(size),
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
	<div
		v-if="address"
		class="wsc-bg-default !bg-opacity-40 py-1 px-2 rounded-lg border-1 border-dotted border-transparent hover:wsc-border-from"
		:class="{ 'text-xs': size === 'xs', 'text-sm': size === 'sm', 'text-md': size === 'md' }"
	>
		<LinkToVoyager :type="type" :address="address" class="flex items-center gap-2.5">
			<JazzIconWrapper :address="address" :size="size" />
			<Address :address="address" />
		</LinkToVoyager>
	</div>
</template>
