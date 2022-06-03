<script setup lang="ts">
/**
 * state
 */

// imports
// refs
// computeds
const isIPFS = ref(false);
const fran6 = computed(() => (isIPFS.value ? "fran6.eth" : "fran6.xyz"));
const toFran6 = computed(() => (isIPFS.value ? "https://fran6.eth.limo" : "https://fran6.xyz"));
// watchers
// hooks
onMounted(() => (isIPFS.value = window.location.host.includes("fran6.eth")));
</script>

<template>
	<header
		class="fixed w-full flex items-center justify-between px-8 py-3 transition-opacity duration-300 ease-in-out backdrop-filter backdrop-blur-lg z-30"
	>
		<div class="flex items-baseline">
			<router-link to="/goerli/insert-your-transaction-hash-here">
				<p class="font-ptmono"><span class="wsc-text-starknet-orange">starknet-receipt-parsooor</span></p>
			</router-link>
			<a :href="toFran6" rel="nofollow noopener" target="_blank">
				<p class="text-xs font-ptmono font-bold wsc-text-default opacity-30">
					.<span class="hover:underline">{{ fran6 }}</span>
				</p>
			</a>
		</div>
	</header>
</template>
