/**
 * The following are the devDependencies needed,
 * you can also install them directly by using:
 * yarn add --dev eslint prettier eslint-config-google eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-prettier
 * The devDependencies:
 * eslint
 * prettier
 * eslint-config-google
 * eslint-plugin-react
 * eslint-plugin-react-hooks
 * eslint-config-prettier
 * eslint-plugin-prettier
 * @typescript-eslint/parser
 * @typescript-eslint/eslint-plugin
 * */
module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'google',
    'prettier',
  ],
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
    'react/display-name': 0,
    'react/react-in-jsx-scope': 0, // when it comes to React17
    'react/self-closing-comp': 2,
  },
  ignorePatterns: ['dist', 'build', 'lib'],
};
