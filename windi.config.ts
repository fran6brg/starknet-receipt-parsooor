import { defineConfig } from "windicss/helpers";
import typography from "windicss/plugin/typography";

const screens = {
	"<xs": { max: "360px" },
	xs: "360px",
	"<sm": { max: "450px" },
	sm: "450px",
	"<md": { max: "680px" },
	md: "680px",
	"<lg": { max: "950px" },
	lg: "950px",
	"<xl": { max: "1440px" },
	xl: "1440px",
	"<2xl": { max: "1600px" },
	"2xl": `1600px`,
};

export const colors = {
	text: {
		default: "gray-400",
		success: "green-300",
		warning: "orange-500",
		error: "red-300",
	},
	bg: {
		default: "gray-700",
		success: "green-700",
		warning: "orange-700",
		error: "red-700",
	},
	border: {
		default: "gray-500",
		success: "green-500",
		warning: "orange-500",
		error: "red-500",
	},
	shadow: {
		default: "gray-500",
		success: "green-500",
		warning: "orange-500",
		error: "red-500",
	},
	decoration: {
		default: "gray-500",
		success: "green-500",
		warning: "orange-500",
		error: "red-500",
	},
	gradient: {
		from: "teal-600",
		via: "teal-400",
		to: "teal-400",
	},
	starknet: {
		blue: "[#28286e]",
		orange: "[#f6633c]",
	},
};

export default defineConfig({
	darkMode: "class",
	// https://windicss.org/posts/v30.html#attributify-mode
	attributify: true,

	plugins: [typography()],
	theme: {
		screens,
		extend: {},
	},
	// https://windicss.org/features/shortcuts.html
	shortcuts: {
		// texts
		"wsc-text-default": `text-${colors.text.default}`,
		"wsc-text-success": `text-${colors.text.success}`,
		"wsc-text-warning": `text-${colors.text.warning}`,
		"wsc-text-error": `text-${colors.text.error}`,
		"wsc-text-from": `text-${colors.gradient.from}`,
		"wsc-text-to": `text-${colors.gradient.to}`,
		"wsc-text-starknet-blue": `text-${colors.starknet.blue}`,
		"wsc-text-starknet-orange": `text-${colors.starknet.orange}`,
		"wsc-text-gradient-t": `bg-clip-text text-transparent bg-gradient-to-t from-${colors.gradient.to} to-${colors.gradient.from}`,
		"wsc-text-gradient-tr": `bg-clip-text text-transparent bg-gradient-to-tr from-${colors.gradient.to} to-${colors.gradient.from}`,
		"wsc-text-gradient-r": `bg-clip-text text-transparent bg-gradient-to-r from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-text-gradient-br": `bg-clip-text text-transparent bg-gradient-to-br from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-text-gradient-b": `bg-clip-text text-transparent bg-gradient-to-b from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-text-gradient-bl": `bg-clip-text text-transparent bg-gradient-to-bl from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-text-gradient-l": `bg-clip-text text-transparent bg-gradient-to-r from-${colors.gradient.to} to-${colors.gradient.from}`,

		// backgrounds
		"wsc-bg-default": `bg-${colors.bg.default}`,
		"wsc-bg-success": `bg-${colors.bg.success}`,
		"wsc-bg-warning": `bg-${colors.bg.warning}`,
		"wsc-bg-error": `bg-${colors.bg.error}`,
		"wsc-bg-from": `bg-${colors.gradient.from}`,
		"wsc-bg-via": `bg-${colors.gradient.via}`,
		"wsc-bg-to": `bg-${colors.gradient.to}`,
		"wsc-bg-starknet-blue": `bg-${colors.starknet.blue}`,
		"wsc-bg-starknet-orange": `bg-${colors.starknet.orange}`,
		"wsc-bg-gradient-t": `text-${colors.text.default} bg-gradient-to-t from-${colors.gradient.to} to-${colors.gradient.from}`,
		"wsc-bg-gradient-tr": `text-${colors.text.default} bg-gradient-to-tr from-${colors.gradient.to} to-${colors.gradient.from}`,
		"wsc-bg-gradient-r": `text-${colors.text.default} bg-gradient-to-r from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-bg-gradient-br": `text-${colors.text.default} bg-gradient-to-br from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-bg-gradient-b": `text-${colors.text.default} bg-gradient-to-b from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-bg-gradient-bl": `text-${colors.text.default} bg-gradient-to-bl from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-bg-gradient-l": `text-${colors.text.default} bg-gradient-to-r from-${colors.gradient.to} to-${colors.gradient.from}`,

		// borders
		"wsc-border-default": `border-${colors.border.default}`,
		"wsc-border-success": `border-${colors.border.success}`,
		"wsc-border-warning": `border-${colors.border.warning}`,
		"wsc-border-error": `border-${colors.border.error}`,
		"wsc-border-from": `border-${colors.gradient.from}`,
		"wsc-border-to": `border-${colors.gradient.to}`,
		"wsc-border-starknet-blue": `border-${colors.starknet.blue}`,
		"wsc-border-starknet-orange": `border-${colors.starknet.orange}`,

		// shadows
		"wsc-shadow-default": `shadow-${colors.shadow.default}`,
		"wsc-shadow-success": `shadow-${colors.shadow.success}`,
		"wsc-shadow-warning": `shadow-${colors.shadow.warning}`,
		"wsc-shadow-error": `shadow-${colors.shadow.error}`,
		"wsc-shadow-from": `shadow-${colors.gradient.from}`,
		"wsc-shadow-to": `shadow-${colors.gradient.to}`,

		// decorations
		"wsc-decoration-default": `decoration-${colors.decoration.default}`,
		"wsc-decoration-success": `decoration-${colors.decoration.success}`,
		"wsc-decoration-warning": `decoration-${colors.decoration.warning}`,
		"wsc-decoration-error": `decoration-${colors.decoration.error}`,
		"wsc-decoration-from": `decoration-${colors.gradient.from}`,
		"wsc-decoration-to": `decoration-${colors.gradient.to}`,

		// transitions
		"wsc-transition-all": "transition-all duration-300 ease-in-out",
	},
});
