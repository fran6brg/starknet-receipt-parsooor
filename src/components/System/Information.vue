<script setup lang="ts">
import { Icon } from "@iconify/vue";

/**
 * props
 */

defineProps({
	content: {
		type: String,
		required: false,
		default: "",
	},
});

/**
 * state
 */

// imports
// refs
// computeds
// watchers
// hooks

/**
 * methods
 */
</script>

<template>
	<div
		v-tippy="{
			content: content,
			delay: [250, 0],
			interactive: true,
			allowHTML: true,
		}"
		class="flex justify-center items-center hover:wsc-text-starknet-orange"
	>
		<Icon icon="carbon:information" class="h-3 w-3" />
	</div>
</template>
