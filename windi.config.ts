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
		defaultLight: "gray-700",
		defaultDark: "gray-300",
		successLight: "green-300",
		successDark: "green-400",
		warningLight: "orange-500",
		warningDark: "orange-500",
		errorLight: "red-300",
		errorDark: "red-700",
	},
	bg: {
		defaultLight: "gray-700",
		defaultDark: "gray-600",
		successLight: "green-700",
		successDark: "green-600",
		warningLight: "orange-700",
		warningDark: "orange-600",
		errorLight: "red-700",
		errorDark: "red-600",
	},
	border: {
		defaultLight: "gray-500",
		defaultDark: "gray-500",
		successLight: "green-500",
		successDark: "green-500",
		warningLight: "orange-500",
		warningDark: "orange-200",
		errorLight: "red-500",
		errorDark: "red-500",
	},
	shadow: {
		defaultLight: "gray-500",
		defaultDark: "gray-200",
		successLight: "green-500",
		successDark: "green-200",
		warningLight: "orange-500",
		warningDark: "orange-200",
		errorLight: "red-500",
		errorDark: "red-200",
	},
	decoration: {
		defaultLight: "gray-500",
		defaultDark: "gray-200",
		successLight: "green-500",
		successDark: "green-200",
		warningLight: "orange-500",
		warningDark: "orange-200",
		errorLight: "red-500",
		errorDark: "red-200",
	},
	gradient: {
		from: "green-400",
		via: "teal-400",
		to: "teal-400",
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
		"wsc-text-default": `text-${colors.text.defaultLight} dark:text-${colors.text.defaultDark}`,
		"wsc-text-success": `text-${colors.text.successLight} dark:text-${colors.text.successDark}`,
		"wsc-text-warning": `text-${colors.text.warningLight} dark:text-${colors.text.warningDark}`,
		"wsc-text-error": `text-${colors.text.errorLight} dark:text-${colors.text.errorDark}`,
		"wsc-text-from": `text-${colors.gradient.from}`,
		"wsc-text-to": `text-${colors.gradient.to}`,
		"wsc-text-gradient-t": `bg-clip-text text-transparent bg-gradient-to-t from-${colors.gradient.to} to-${colors.gradient.from}`,
		"wsc-text-gradient-tr": `bg-clip-text text-transparent bg-gradient-to-tr from-${colors.gradient.to} to-${colors.gradient.from}`,
		"wsc-text-gradient-r": `bg-clip-text text-transparent bg-gradient-to-r from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-text-gradient-br": `bg-clip-text text-transparent bg-gradient-to-br from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-text-gradient-b": `bg-clip-text text-transparent bg-gradient-to-b from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-text-gradient-bl": `bg-clip-text text-transparent bg-gradient-to-bl from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-text-gradient-l": `bg-clip-text text-transparent bg-gradient-to-r from-${colors.gradient.to} to-${colors.gradient.from}`,

		// backgrounds
		"wsc-bg-default": `bg-${colors.bg.defaultLight} dark:bg-${colors.bg.defaultDark}`,
		"wsc-bg-success": `bg-${colors.bg.successLight} dark:bg-${colors.bg.successDark}`,
		"wsc-bg-warning": `bg-${colors.bg.warningLight} dark:bg-${colors.bg.warningDark}`,
		"wsc-bg-error": `bg-${colors.bg.errorLight} dark:bg-${colors.bg.errorDark}`,
		"wsc-bg-from": `bg-${colors.gradient.from}`,
		"wsc-bg-via": `bg-${colors.gradient.via}`,
		"wsc-bg-to": `bg-${colors.gradient.to}`,
		"wsc-bg-gradient-t": `text-${colors.text.defaultLight} dark:text-${colors.text.defaultDark} bg-gradient-to-t from-${colors.gradient.to} to-${colors.gradient.from}`,
		"wsc-bg-gradient-tr": `text-${colors.text.defaultLight} dark:text-${colors.text.defaultDark} bg-gradient-to-tr from-${colors.gradient.to} to-${colors.gradient.from}`,
		"wsc-bg-gradient-r": `text-${colors.text.defaultLight} dark:text-${colors.text.defaultDark} bg-gradient-to-r from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-bg-gradient-br": `text-${colors.text.defaultLight} dark:text-${colors.text.defaultDark} bg-gradient-to-br from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-bg-gradient-b": `text-${colors.text.defaultLight} dark:text-${colors.text.defaultDark} bg-gradient-to-b from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-bg-gradient-bl": `text-${colors.text.defaultLight} dark:text-${colors.text.defaultDark} bg-gradient-to-bl from-${colors.gradient.from} to-${colors.gradient.to}`,
		"wsc-bg-gradient-l": `text-${colors.text.defaultLight} dark:text-${colors.text.defaultDark} bg-gradient-to-r from-${colors.gradient.to} to-${colors.gradient.from}`,

		// borders
		"wsc-border-default": `border-${colors.border.defaultLight} dark:border-${colors.border.defaultDark}`,
		"wsc-border-success": `border-${colors.border.successLight} dark:border-${colors.border.successDark}`,
		"wsc-border-warning": `border-${colors.border.warningLight} dark:border-${colors.border.warningDark}`,
		"wsc-border-error": `border-${colors.border.errorLight} dark:border-${colors.border.errorDark}`,
		"wsc-border-from": `border-${colors.gradient.from}`,
		"wsc-border-to": `border-${colors.gradient.to}`,

		// shadows
		"wsc-shadow-default": `shadow-${colors.shadow.defaultLight} dark:shadow-${colors.shadow.defaultDark}`,
		"wsc-shadow-success": `shadow-${colors.shadow.successLight} dark:shadow-${colors.shadow.successDark}`,
		"wsc-shadow-warning": `shadow-${colors.shadow.warningLight} dark:shadow-${colors.shadow.warningDark}`,
		"wsc-shadow-error": `shadow-${colors.shadow.errorLight} dark:shadow-${colors.shadow.errorDark}`,
		"wsc-shadow-from": `shadow-${colors.gradient.from}`,
		"wsc-shadow-to": `shadow-${colors.gradient.to}`,

		// decorations
		"wsc-decoration-default": `decoration-${colors.decoration.defaultLight} dark:decoration-${colors.decoration.defaultDark}`,
		"wsc-decoration-success": `decoration-${colors.decoration.successLight} dark:decoration-${colors.decoration.successDark}`,
		"wsc-decoration-warning": `decoration-${colors.decoration.warningLight} dark:decoration-${colors.decoration.warningDark}`,
		"wsc-decoration-error": `decoration-${colors.decoration.errorLight} dark:decoration-${colors.decoration.errorDark}`,
		"wsc-decoration-from": `decoration-${colors.gradient.from}`,
		"wsc-decoration-to": `decoration-${colors.gradient.to}`,

		// transitions
		"wsc-transition-all": "transition-all duration-300 ease-in-out",
	},
});
