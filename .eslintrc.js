module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['google', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      { semi: true, endOfLine: 'auto', singleQuote: true },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-invalid-this': 0,
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 2 : 1,
  },
  ignorePatterns: ['dist', 'build', 'lib', '*.json'],
};
