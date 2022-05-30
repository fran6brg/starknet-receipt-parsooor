<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
	<footer class="fixed bottom-0 w-full bg-transparent pt-2 pb-3 px-8 flex justify-center items-center wsc-text-default">
		<div class="flex gap-2 group opacity-50 hover:opacity-100 py-2">
			<p class="text-xs font-ptmono font-bold wsc-text-gradient-r">IPFS hosted</p>
			<Icon icon="simple-icons:ipfs" class="h-3 w-3 wsc-text-from" />
		</div>
	</footer>
</template>
