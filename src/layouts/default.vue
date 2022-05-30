<script setup lang="ts">
import { useApp } from "~/composables";

// imports
const { state, initApp } = useApp();

// hooks
onMounted(async () => {
	if (!state.loading) await initApp();
});
</script>

<template>
	<main class="h-full flex flex-col wsc-text-default">
		<Header />
		<div class="h-full transition-all duration-300 ease-in-out min-w-xs">
			<router-view />
		</div>
		<Footer class="fixed bottom-0 w-full" />
	</main>
</template>
