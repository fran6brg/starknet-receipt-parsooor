<script setup lang="ts">
import { useApp, useGateway } from "~/composables";
import { ITransactionReceipt } from "~/interfaces";

/**
 * props
 */

const props = defineProps({
	hash: {
		type: String,
		required: true,
		default: "",
	},
});

/**
 * state
 */

// imports
const { state } = useApp();
const { getTxStatus } = useGateway();

// refs
const receipt = ref<null | ITransactionReceipt>(await getTxStatus(props.hash));

// computeds
// watchers
// hooks
onErrorCaptured((error) => {
	state.error = new Error(JSON.stringify(error));
	console.warn("component/receipt", error);
});
</script>

<template>
	<div class="flex flex-col gap-6">
		<a :href="`https://goerli.voyager.online/tx/${props.hash}`" rel="nofollow noopener" target="_blank" class="flex gap-1 items-center group">
			<p class="flex items-center text-xs">View in <span class="group-hover:underline ml-1.5">goerli.voyager.online</span></p>
		</a>
		<pre class="wsc-text-default">{{ receipt }}</pre>
	</div>
</template>
