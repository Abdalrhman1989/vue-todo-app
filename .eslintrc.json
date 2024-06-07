import { defineConfig } from 'eslint-define-config';
import vue from 'eslint-plugin-vue';

export default defineConfig([
  {
    ignores: ['node_modules/**/*'],
  },
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        browser: true,
      },
    },
    plugins: {
      vue: vue,
    },
    rules: {
      'vue/html-indent': ['error', 2],
      'vue/max-attributes-per-line': ['error', {
        singleline: 1,
        multiline: 1,
      }],
      'no-unused-vars': ['error', { args: 'none' }],
      'vue/html-self-closing': ['warn', {
        html: {
          void: 'never',
          normal: 'any',
          component: 'always',
        },
      }],
    },
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@babel/eslint-parser',
        requireConfigFile: false,  // This line is important to avoid Babel config file errors
        sourceType: 'module',
        ecmaVersion: 2021,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
]);
