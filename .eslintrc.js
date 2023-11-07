module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	overrides: [
		{
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'no-unused-vars': 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-empty-pattern': 'off',
		'no-case-declarations': 'off',
	},
};
