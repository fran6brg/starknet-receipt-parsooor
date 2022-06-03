<script setup lang="ts">
/**
 * props
 */

defineProps({
	variant: {
		type: String,
		required: false,
		default: "success",
		validator: (value: string) => ["success", "warning", "error"].includes(value),
	},
});
</script>

<template>
	<span
		class="pulse"
		:class="{
			'pulse-success': variant === 'success',
			'pulse-warning': variant === 'warning',
			'pulse-error': variant === 'error',
		}"
	/>
</template>

<style lang="scss" scoped>
.pulse {
	@apply w-2 h-2 rounded-full;

	/**
	* success
	*/

	&-success {
		@apply wsc-bg-success;
		box-shadow: 0 0 0 #34d33566;
		animation: pulse 2s infinite;

		:hover {
			animation: none;
		}

		@-webkit-keyframes pulse {
			0% {
				-webkit-box-shadow: 0 0 0 0 rgba(52, 211, 53, 0.4);
			}
			70% {
				-webkit-box-shadow: 0 0 0 7px rgba(52, 211, 53, 0);
			}
			100% {
				-webkit-box-shadow: 0 0 0 0 rgba(52, 211, 53, 0);
			}
		}
		@keyframes pulse {
			0% {
				-moz-box-shadow: 0 0 0 0 rgba(52, 211, 53, 0.4);
				box-shadow: 0 0 0 0 rgba(52, 211, 53, 0.4);
			}
			70% {
				-moz-box-shadow: 0 0 0 7px rgba(52, 211, 53, 0);
				box-shadow: 0 0 0 7px rgba(52, 211, 53, 0);
			}
			100% {
				-moz-box-shadow: 0 0 0 0 rgba(52, 211, 53, 0);
				box-shadow: 0 0 0 0 rgba(52, 211, 53, 0);
			}
		}
	}

	/**
	* warning
	*/

	&-warning {
		@apply wsc-bg-warning;
	}

	/**
	* error
	*/

	&-error {
		@apply wsc-bg-error;
	}
}
</style>
