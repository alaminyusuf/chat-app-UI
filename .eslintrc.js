module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'google'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['plugin1', 'eslint-plugin-plugin2', 'react'],
  rules: {
    eqeqeq: 'off',
    curly: 'error',
    quotes: ['error', 'double'],
    'plugin1/rule1': 'error',
  },
}
