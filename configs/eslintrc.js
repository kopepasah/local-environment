module.exports = {
	extends: 'eslint:recommended',

	parserOptions: {
		'ecmaVersion': 8,
		'sourceType': 'module',
	},

	env: {
		'browser': true,
		'node': true,
	},

	globals: {
		'window': true,
		'console': true,
	},

	rules: {}
}
