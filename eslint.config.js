import { defineConfig } from 'eslint-define-config';
import vue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';
import babelParser from '@babel/eslint-parser';

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
      vue,
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
      parser: vueParser,
      parserOptions: {
        parser: babelParser,
        sourceType: 'module',
        ecmaVersion: 2021,
        ecmaFeatures: {
          jsx: true,
        },
        requireConfigFile: false, // Add this line to disable the need for a Babel config file
      },
    },
  },
]);
