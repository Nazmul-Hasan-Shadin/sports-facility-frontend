module.exports = {
  // Define the environment and globals
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended', // Base recommended settings
    'plugin:react/recommended', // React specific linting rules
    'plugin:@typescript-eslint/recommended' // TypeScript specific linting rules
  ],
  parser: '@typescript-eslint/parser', // Specify the ESLint parser for TypeScript
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'], // Add TypeScript plugin
  rules: {
    // Disable specific ESLint rules
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    'react/prop-types': 'off',

    // Disable TypeScript specific rules
    '@typescript-eslint/no-explicit-any': 'off', // Disable rule for `any` type
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
