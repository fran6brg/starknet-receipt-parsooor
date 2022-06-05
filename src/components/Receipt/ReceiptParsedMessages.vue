<script setup lang="ts">
import { useApp } from "~/composables";
import { IReceiptL2ToL1Messages } from "~/interfaces";
import { PropType } from "vue";

/**
 * props
 */

defineProps({
	messages: {
		type: Object as PropType<IReceiptL2ToL1Messages[]>,
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
	console.warn("component/receiptparsedmessages", error);
});
</script>

<template>
	<div
		class="flex flex-col items-end w-full rounded-xl"
		:class="{
			'bg-gradient-to-tr from-blue-800/20 via-blue-400/10 to-orange-400/20': messages.length,
			'wsc-bg-default bg-opacity-20': !messages.length,
		}"
	>
		<button
			class="flex justify-between items-center w-full py-4 px-8 cursor-pointer"
			:class="{ 'cursor-not-allowed': !messages.length }"
			:disabled="!messages.length"
			@click="isCollapsed = !isCollapsed"
		>
			<p v-if="messages.length" class="wsc-text-starknet-orange">{{ messages.length }} message{{ messages.length ? "s" : "" }}</p>
			<p v-else class="wsc-text-default">No message</p>
		</button>
		<Collapse v-if="messages.length" :is-collapsed="isCollapsed">
			<transition name="fade" mode="out-in">
				<div
					v-show="isCollapsed"
					class="mx-4 mb-4 flex flex-col border-1 wsc-border-default wsc-transition-all rounded-2xl p-3 bg-blue-gray-700 bg-opacity-20 gap-2 relative"
				>
					<div
						v-for="(message, index) in messages"
						:key="`message-${index}`"
						class="flex flex-col gap-2 border-1 p-3 wsc-border-default border-opacity-15 rounded-xl"
					>
						<div class="flex items-center gap-2">
							<p v-if="message.from_address" class="wsc-text-default">from_address</p>
							<AddressDesigned v-if="message.from_address" :address="message.from_address" type="contract" />
						</div>
						<div class="flex items-center gap-2">
							<p v-if="message.to_address" class="wsc-text-default">to_address</p>
							<AddressDesigned v-if="message.to_address" :address="message.to_address" type="contract" />
						</div>
						<div class="flex flex-col items-start gap-2">
							<p v-if="message.payload" class="wsc-text-default">payload</p>
							<pre>{{ message.payload }}</pre>
						</div>
					</div>
				</div>
			</transition>
		</Collapse>
	</div>
</template>
