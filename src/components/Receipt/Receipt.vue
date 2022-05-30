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
	<pre>{{ receipt }}</pre>
</template>
