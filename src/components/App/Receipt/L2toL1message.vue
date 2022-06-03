<script setup lang="ts">
import { IReceiptL2ToL1Messages } from "~/interfaces";
import { PropType } from "vue";

/**
 * props
 */

const props = defineProps({
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
	<div v-for="(msg, mIndex) in receipt.l2_to_l1_messages" :key="`${mIndex}-${msg}`" class="flex flex-col gap-1">
		<div>
			<p>{{ receipt.l2_to_l1_messages[mIndex].from_address }}</p>
			<p>{{ receipt.l2_to_l1_messages[mIndex].to_address }}</p>
			<p>{{ receipt.l2_to_l1_messages[mIndex].payload }}</p>
		</div>
	</div>
</template>
