module.exports = {
  env: {
    browser: true,
    es6:     true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics:           'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType:  'module',
  },
  rules: {
    'import/extensions': ['error', 'always'],
    'key-spacing':       ['error', { mode: 'minimum', align: 'value' }],
  },
};
