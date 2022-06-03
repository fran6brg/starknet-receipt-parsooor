<script setup lang="ts">
import * as packages from "../../../../package.json";
import { Icon } from "@iconify/vue";
</script>

<template>
	<footer class="fixed bottom-0 w-full bg-transparent pt-2 pb-3 px-8 flex justify-between text-[#28286e]">
		<!-- version -->
		<div class="flex items-center gap-2 py-2 opacity-30 hover:opacity-100">
			<Icon icon="carbon:laptop" class="h-3 w-3" />
			<p class="text-xs font-ptmono font-bold flex hover:opacity-100">UI v{{ packages.version }}</p>
		</div>

		<!-- links -->
		<div class="flex items-center gap-2 py-2">
			<div class="flex items-center gap-2">
				<!-- todo -->
				<a href="https://github.com/fran6brg" rel="nofollow noopener" target="_blank" class="flex items-center">
					<uil:github class="w-4 h-4" />
				</a>
			</div>
			<p class="text-xs font-ptmono font-bold opacity-50">/</p>
			<div class="flex items-center gap-2">
				<uil:twitter class="w-4 h-4" />
				<a href="https://twitter.com/fran6brg" rel="nofollow noopener" target="_blank">
					<p class="flex items-center text-xs hover:underline">@fran6brg</p>
				</a>
				<a href="https://mobile.twitter.com/Mersona5" rel="nofollow noopener" target="_blank">
					<p class="flex items-center text-xs hover:underline">@Mersona5</p>
				</a>
			</div>
			<p class="text-xs font-ptmono font-bold opacity-50">/</p>
			<a href="https://starknet-receipt-parsooor.fran6.eth.limo" rel="nofollow noopener" target="_blank">
				<p class="text-xs font-ptmono font-bold"><span class="hover:underline">IPFS hosted</span></p>
			</a>
		</div>
	</footer>
</template>
