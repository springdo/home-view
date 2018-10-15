module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/first': ['error', 'DISABLE-absolute-first'],
    'no-param-reassign': [
      'error',
      {
        props: false,
        ignorePropertyModificationsFor: [
          'state',
          'decimals',
          'value'
        ],
      },
    ],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
