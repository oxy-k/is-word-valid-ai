import globals from 'globals'
import pluginJs from '@eslint/js'

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      'prefer-const': 'error',
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'error',
        'single'
      ],
      'semi': [
        'error',
        'never'
      ],
      'object-curly-spacing': ['error', 'always']
    }
  }
]