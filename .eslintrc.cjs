/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	root: true,
	extends: ["eslint:recommended"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		parser: "@typescript-eslint/parser"
	},
	plugins: ["@typescript-eslint"],
	parser: "@typescript-eslint/parser",
	env: {
		browser: true,
		node: true,
		es6: true
	}
};
