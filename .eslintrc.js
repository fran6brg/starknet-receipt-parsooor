// this assumes you are running in a Node environment, only for this file
/* eslint-env node */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		// node: true, this would allow node syntax everywhere, wrong
	},
	extends: [
		"plugin:vue/vue3-recommended",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"@vue/prettier",
		"@vue/prettier/@typescript-eslint",
		"prettier",
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	plugins: ["vue", "@typescript-eslint", "prettier"],
	// https://github.com/prettier/eslint-plugin-prettier
	rules: {
		// Allow prettier to works
		"prettier/prettier": "error",
		// Allow auto import of @vueuse hooks
		"no-undef": "off",
		// Allow single word component names
		"vue/multi-word-component-names": "off",
	},
};
