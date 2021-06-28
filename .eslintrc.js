module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'google', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      { semi: true, endOfLine: 'auto', singleQuote: true },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 2 : 1,
  },
  ignorePatterns: ['dist', 'build', 'lib', '*.json'],
};
