<script setup lang="ts">
import * as packages from "../../../../package.json";
import { Icon } from "@iconify/vue";
</script>

<template>
	<footer class="fixed bottom-0 w-full bg-transparent pt-2 pb-3 px-8 flex justify-between items-end wsc-text-starknet-blue text-xs">
		<!-- version -->
		<div class="flex flex-col gap-1 py-2">
			<div class="flex items-center gap-2 opacity-30 hover:opacity-100">
				<Icon icon="carbon:laptop" class="h-3 w-3" />
				<p class="font-ptmono font-bold flex hover:opacity-100">UI v{{ packages.version }}</p>
			</div>
			<div class="flex items-center gap-2 opacity-30 hover:opacity-100">
				<Icon icon="carbon:information" class="h-3 w-3" />
				<p class="font-ptmono font-bold flex hover:opacity-100">Better on google chrome</p>
			</div>
		</div>

		<!-- links -->
		<div class="flex items-center gap-2 py-2">
			<div class="flex items-center gap-2">
				<!-- todo -->
				<a href="https://github.com/fran6brg" rel="nofollow noopener" target="_blank" class="flex items-center gap-1">
					<p class="">soon</p>
					<uil:github class="w-4 h-4" />
				</a>
			</div>
			<p class="font-ptmono font-bold opacity-50">/</p>
			<div class="flex items-center gap-2">
				<uil:twitter class="w-4 h-4" />
				<a href="https://twitter.com/fran6brg" rel="nofollow noopener" target="_blank">
					<p class="flex items-center hover:underline">@fran6brg</p>
				</a>
				<a href="https://mobile.twitter.com/Mersona5" rel="nofollow noopener" target="_blank">
					<p class="flex items-center hover:underline">@Mersona5</p>
				</a>
			</div>
			<p class="font-ptmono font-bold opacity-50">/</p>
			<a href="https://starknet-receipt-parsooor.fran6.eth.link" rel="nofollow noopener" target="_blank">
				<p class="font-ptmono font-bold"><span class="hover:underline">IPFS</span></p>
			</a>
		</div>
	</footer>
</template>
