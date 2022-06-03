<script setup lang="ts">
import { Icon } from "@iconify/vue";

/**
 * props
 */

const props = defineProps({
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
const { copy, copied } = useClipboard({ source: props.address });

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
		class="flex items-center gap-2.5 wsc-bg-default bg-opacity-70 py-1 px-2 rounded-lg border-1 border-dotted border-transparent hover:wsc-border-from !border-opacity-40"
		:class="{ 'text-xs': size === 'xs', 'text-sm': size === 'sm', 'text-md': size === 'md' }"
	>
		<JazzIconWrapper v-if="type !== 'tx'" :address="address" :size="size" />
		<Address :address="address" />
		<button class="hover:wsc-text-from" @click="copy(value)">
			<Icon v-if="copied" icon="carbon:checkmark" class="h-3 w-3" />
			<Icon v-else icon="carbon:copy" class="h-3 w-3" />
		</button>
		<LinkToVoyager :type="type" :address="address" class="hover:wsc-text-from">
			<Icon icon="ic:baseline-open-in-new" class="h-3 w-3" />
		</LinkToVoyager>
	</div>
</template>
