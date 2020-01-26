module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:imports/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
  ],
  rules: {
    'react/prop-types': 0,
    'no-console': 1,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/state-in-constructor': 0,
    'react/jsx-pascal-case': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/no-unescaped-entities': 0,
  },
  plugins: ['react', 'import', 'jsx-a11y', 'babel'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
