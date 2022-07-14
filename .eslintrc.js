module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:vue/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
  ],
  'rules': {
    'semi': 'off',
    'camelcase': [0, {properties: 'always'}],
    'vue/multi-word-component-names': 'off',
    'vue/array-bracket-spacing': 'error',
    'vue/arrow-spacing': 'error',
    'vue/block-spacing': 'error',
    'vue/brace-style': 'error',
    'vue/camelcase': 'off',
    'vue/comma-dangle': 'error',
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/eqeqeq': 'off',
    'vue/key-spacing': 'error',
    'vue/match-component-file-name': 'error',
  },
};
