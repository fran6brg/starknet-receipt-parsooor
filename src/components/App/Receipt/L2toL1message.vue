<script setup lang="ts">
import { IReceiptL2ToL1Messages } from "~/interfaces";
import { PropType } from "vue";

/**
 * props
 */

defineProps({
	message: {
		type: Object as PropType<IReceiptL2ToL1Messages>,
		required: true,
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
// hooks
</script>

<template>
	<div v-if="message" class="flex p-2 border-1 wsc-border-from rounded-lg">
		<p>{{ message.from_address }}</p>
		<p>{{ message.to_address }}</p>
		<p>{{ message.payload }}</p>
	</div>
</template>
