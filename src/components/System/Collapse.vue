<template>
	<transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
		<div v-show="delayedFlag">
			<slot />
		</div>
	</transition>
</template>

<script setup lang="ts">
/**
 * s/o stationf
 */

/**
 * Props
 */

const props = defineProps({
	isCollapsed: {
		type: Boolean as () => boolean,
		required: false,
		default: true,
	},

	delay: {
		type: Number as () => number,
		required: false,
		default: 0,
	},
});

/**
 * State
 */

// imports
// refs
const delayedFlag = ref<boolean>(true);
// watchers
watch(
	() => props.isCollapsed,
	(to) => {
		setTimeout(() => {
			delayedFlag.value = to;
		}, props.delay);
	},
);
// hooks
onMounted((): void => {
	delayedFlag.value = props.isCollapsed;
});

/**
 * methods
 */

const enter = (element: HTMLElement): void => {
	const width = window.getComputedStyle(element).width;

	element.style.width = width;
	element.style.position = "absolute";
	element.style.visibility = "hidden";
	element.style.height = "auto";

	const height = window.getComputedStyle(element).height;

	element.style.width = "100%";
	element.style.position = "static";
	element.style.visibility = "visible";
	element.style.height = "0px";

	/*
	 * Force repaint to make sure the
	 * Animation is triggered correctly.
	 */
	window.getComputedStyle(element).height;

	/*
	 * Trigger the animation.
	 * We use `requestAnimationFrame` because we need
	 * To make sure the browser has finished
	 * Painting after setting the `height`
	 * To `0` in the line above.
	 */
	requestAnimationFrame(() => {
		element.style.height = height;
	});
};

const afterEnter = (element: HTMLElement): void => {
	element.style.height = "auto";
};

const leave = (element: HTMLElement): void => {
	// Update element height
	element.style.height = window.getComputedStyle(element).height;

	/*
	 * Force repaint to make sure the
	 * Animation is triggered correctly.
	 */
	window.getComputedStyle(element).height;

	requestAnimationFrame(() => {
		element.style.height = "0px";
	});
};
</script>

<style lang="scss" scoped>
.expand-enter-active,
.expand-leave-active {
	transition: height 0.3s ease-in-out;
	overflow: hidden;
}

.expand-enter,
.expand-leave-to {
	height: 0;
}

* {
	will-change: height;
	transform: translateZ(0);
	backface-visibility: hidden;
	perspective: 1000px;
}
</style>
