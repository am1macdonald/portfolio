import js from "@eslint/js";
import globals from "globals";

export default [
	{ ignores: ["node_modules/**", "vite.config.js"] },
	{
		...js.configs.recommended,
		languageOptions: {
			globals: globals.browser,
		},
		files: ["**/*.js"],
	},
];
