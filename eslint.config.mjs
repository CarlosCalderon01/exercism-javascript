import {defineConfig} from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      // Reglas ESLint
      indent: ['error', 2],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-trailing-spaces': 'error',
      'eol-last': ['error', 'always'],
      'object-curly-spacing': ['error', 'never'],
      'space-before-function-paren': ['error', 'never'],
      'no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
      eqeqeq: ['error', 'always'],
      'no-console': 'off',

      // Prettier como regla
      'prettier/prettier': 'error',
    },
  },
]);
