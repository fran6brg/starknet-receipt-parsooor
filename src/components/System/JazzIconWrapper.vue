<template>
	<JazzIcon :address="address" :diameter="sizes[size]" />
</template>

<script lang="ts" setup>
/**
 * constants
 */

// Width/height of the icon in blocks, default: 8
const sizes: Record<string, number> = {
	xs: 16,
	sm: 20,
	md: 24,
	lg: 28,
	xl: 34,
	xxl: 42,
};

/**
 * props
 */

// see https://github.com/HerrBertling/vue-blockies/blob/main/src/components/VueBlockie.vue
defineProps({
	address: {
		type: String,
		required: true,
	},
	size: {
		type: String,
		required: false,
		default: "xs",
		validator: (size: string) => ["xs", "sm", "md", "lg", "xl", "xxl"].includes(size),
	},
});
</script>
