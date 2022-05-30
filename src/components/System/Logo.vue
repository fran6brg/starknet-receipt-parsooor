<script setup lang="ts">
/**
 * props
 */

defineProps({
	// Select logo image source
	source: {
		type: String as () => string,
		required: false,
		default: null,
	},

	// Select logo form
	variant: {
		type: String as () => string,
		required: false,
		default: "square",
	},

	// Select logo size
	size: {
		type: String,
		required: false,
		default: "xs",
		validator: (size: string) => ["xs", "sm", "md", "lg", "xl"].includes(size),
	},
});
</script>

<template>
	<div
		class="flex items-center justify-center wsc-transition-all transform hover:scale-105"
		:class="{
			'h-10 w-10 min-w-10': size === 'xs',
			'h-14 w-14 min-w-14': size === 'sm',
			'h-20 w-20 min-w-20': size === 'md',
			'h-28 w-28 min-w-28': size === 'lg',
			'h-36 w-36 min-w-36': size === 'xl',
		}"
	>
		<img
			v-if="source"
			:src="source"
			class="h-full object-cover"
			:class="{
				'rounded-full': variant === 'rounded',
				'rounded-md': variant === 'squircle',
			}"
		/>
		<div v-else class="h-full w-full fake-line rounded-full" />
	</div>
</template>
