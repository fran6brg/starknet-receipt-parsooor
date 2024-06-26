<script setup lang="ts">
import { Icon } from "@iconify/vue";

/**
 * props
 */

const props = defineProps({
	label: {
		type: String,
		required: false,
		default: null,
	},
	description: {
		type: String,
		required: false,
		default: null,
	},
	placeholder: {
		type: String,
		required: false,
		default: null,
	},
	value: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: false,
		default: "input",
	},
	error: {
		type: String,
		required: false,
		default: null,
	},
});

/**
 * events
 */

const emit = defineEmits(["update:value"]);

/**
 * state
 */

// refs
const localValue = ref(props.value);
// console.log("localValue", localValue.value);
const localError = ref<string>("");
const isValidatingInput = ref<boolean>(false);
// computeds
// hooks

/**
 * methods
 */

const handleInput = (e: Event & { target: HTMLInputElement }): void => {
	// see https://stackoverflow.com/questions/42066421/property-value-does-not-exist-on-type-eventtarget
	const input = e.target?.value;

	// set state
	localValue.value = input;
	isValidatingInput.value = true;

	// -
	validateInput(input);
};

const validateInput = (input: string) => {
	// console.log("validateInput", input);
	// handle empty string
	if (!input) localError.value = "";
	// handle NullAddress
	else if (![65, 64, 63].includes(input.length))
		emit("update:value", { value: localValue.value, error: "Please enter a valid hash -> format 0x[chars hex]" });
	// emit input update
	else {
		localError.value = "";
		// console.log("update:value", localValue.value);
		emit("update:value", { value: localValue.value, error: "" });
	}

	// set state
	isValidatingInput.value = false;
};

// watchers
watch(
	() => props.value,
	(current: string) => {
		// console.warn({ current });
		if (current) {
			localValue.value = current;
			validateInput(current);
		} else localValue.value = "";
	},
	{ immediate: true },
);
</script>

<template>
	<div class="flex flex-col group rounded-lg hover:bg-gray-600 hover:bg-opacity-20 px-2 py-1">
		<div class="flex flex-col">
			<div class="flex justify-between gap-2 items-end mb-2">
				<div class="flex flex-col">
					<p v-if="label" class="text-sm py-0.5 font-bold">{{ label }}</p>
					<p v-if="description" class="text-xs mt-1 opacity-50" v-html="description"></p>
				</div>
			</div>
		</div>

		<!-- input -->
		<!-- see https://www.tutorialrepublic.com/faq/how-to-disable-spell-checking-in-html-forms.php -->
		<div class="flex items-center mb-1">
			<component
				:is="type"
				:value="localValue"
				class="test w-full text-left bg-transparent focus:outline-none overflow-x-scroll py-1 px-2 pr-10 border-b-1 wsc-border-default focus:wsc-border-starknet-orange border-opacity-50 focus:border-opacity-100 text-xs text-gray-300 no-underline wsc-transition-all group-hover:wsc-border-starknet-orange"
				spellcheck="false"
				:placeholder="placeholder"
				:type="type"
				@input="handleInput"
			/>
			<div class="-ml-7">
				<Icon v-if="localValue && (localError || error)" icon="carbon:warning-hex" class="wsc-text-error" />
				<Icon v-else-if="isValidatingInput" icon="carbon:hourglass" class="wsc-text-from" />
				<Icon v-else-if="localValue" icon="carbon:checkmark" class="wsc-text-success" />
			</div>
		</div>

		<!-- error -->
		<p v-if="localError || error" class="text-xs text-red-700 font-bold">
			{{ localError ? localError : error }}
		</p>
	</div>
</template>

<style scoped lang="scss">
.test {
	font-family: "PT Mono", monospace;
}
</style>
