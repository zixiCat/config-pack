const eslintFile = '.eslintrc.js';
const tsconfigFile = 'tsconfig.json';
const gitignoreFile = 'gitignore';
const licenseFile = 'LICENSE';
const rollupFile = 'rollup.config.js';
const versionFile = '.versionrc.js';

const configMap: { [x: string]: string } = {
  eslint: eslintFile,
  eslintrc: eslintFile,
  ts: tsconfigFile,
  tsconfig: tsconfigFile,
  typescript: tsconfigFile,
  gitignore: gitignoreFile,
  license: licenseFile,
  rollup: rollupFile,
  version: versionFile,
  versionrc: versionFile,
};

export default configMap;
