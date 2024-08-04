import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin' // Corrected import path
import tseslintParser from '@typescript-eslint/parser' // You'll need the parser as well

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.browser,
      parser: tseslintParser, // Specify the parser for TypeScript files
    },
    rules: {
      // Add any custom rules you want here
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
