<script setup lang="ts">
import { useApp } from "~/composables";
import { IReceiptEvent } from "~/interfaces";
import { PropType } from "vue";

/**
 * props
 */

defineProps({
	events: {
		type: Object as PropType<IReceiptEvent[]>,
		required: true,
	},
});

/**
 * state
 */

// imports
const { state } = useApp();

// refs
const isCollapsed = ref(false);
// computeds
// watchers
// hooks
onErrorCaptured((error) => {
	state.error = new Error(JSON.stringify(error));
	console.warn("component/receiptparsedevents", error);
});
</script>

<template>
	<div
		class="flex flex-col items-end w-full rounded-xl"
		:class="{
			'bg-gradient-to-tr from-blue-800/20 via-blue-400/10 to-orange-400/20': events.length,
			'wsc-bg-default bg-opacity-20': !events.length,
		}"
	>
		<button
			class="flex justify-between items-center w-full py-4 px-8 cursor-pointer"
			:class="{ 'cursor-not-allowed': !events.length }"
			:disabled="!events.length"
			@click="isCollapsed = !isCollapsed"
		>
			<p v-if="events.length" class="wsc-text-starknet-orange">{{ events.length }} event{{ events.length > 1 ? "s" : "" }}</p>
			<p v-else class="wsc-text-default">No event</p>
		</button>
		<Collapse v-if="events.length" :is-collapsed="isCollapsed">
			<transition name="fade" mode="out-in">
				<div
					v-show="isCollapsed"
					class="mx-4 mb-4 flex flex-col border-1 wsc-border-default wsc-transition-all rounded-2xl p-3 bg-blue-gray-700 bg-opacity-20 gap-2 relative"
				>
					<pre>{{ events }}</pre>
				</div>
			</transition>
		</Collapse>
	</div>
</template>
