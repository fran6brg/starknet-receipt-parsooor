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

const isL2Address = (address: string) => address.length > 42;
</script>

<template>
	<div
		class="flex items-center gap-2.5 wsc-bg-default bg-opacity-70 py-1 px-2 rounded-lg border-1 border-dotted border-transparent hover:wsc-border-from w-max"
		:class="{ 'text-xs': size === 'xs', 'text-sm': size === 'sm', 'text-md': size === 'md' }"
	>
		<template v-if="address">
			<!-- v-if="type === 'contract'" -->
			<JazzIconWrapper :address="address" :size="size" />
			<Address :address="address" />
			<button class="hover:wsc-text-from" @click="copy(address)">
				<Icon v-if="copied" icon="carbon:checkmark" class="h-3 w-3" />
				<Icon v-else icon="carbon:copy" class="h-3 w-3" />
			</button>
			<LinkToVoyager v-if="isL2Address(address)" :type="type" :address="address" class="hover:wsc-text-from">
				<Icon icon="ic:baseline-open-in-new" class="h-3 w-3" />
			</LinkToVoyager>
			<LinkToEtherscan v-else :type="type" :address="address" class="hover:wsc-text-from">
				<Icon icon="ic:baseline-open-in-new" class="h-3 w-3" />
			</LinkToEtherscan>
		</template>
		<template v-else>
			<Address :address="address" />
		</template>
	</div>
</template>
