module.exports = {
  extends: [
    'eslint-config-airbnb',
    'eslint-config-prettier',
    'eslint-config-prettier/react'
  ].map(require.resolve),

  plugins: ['react', 'prettier'],

  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  rules: {
    indent: 0,
    curly: ['error', 'all'],
    'import/prefer-default-export': 'off',
    'no-alert': 'error',
    'no-debugger': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'linebreak-style': 'off',
    'capitalized-comments': [
      'error',
      'always',
      { ignoreConsecutiveComments: true }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        jsxBracketSameLine: false
      }
    ]
  }
};
