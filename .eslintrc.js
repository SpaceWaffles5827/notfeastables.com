module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'overrides': [
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
  ],
  'rules': {
    'indent': ['error', 2],
    'new-cap': 'off',
    'require-jsdoc': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
    'max-len': ['error', {code: 100}],
    'camelcase': 'off',
  },
};
