/* config files */
const eslintFile = '.eslintrc.js';
const tsconfigFile = 'tsconfig.json';
const gitignoreFile = 'gitignore';
const licenseFile = 'LICENSE';
const rollupFile = 'rollup.config.js';
const versionFile = '.versionrc.js';

/* template directory */
const reactTypescript = 'react-typescript';
const reactElectronTypescript = 'react-electron-typescript';

export const configMap: { [x: string]: string } = {
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

export const templateMap: { [x: string]: string } = {
  'react-typescript': reactTypescript,
  'react-ts': reactTypescript,
  'react-electron-typescript': reactElectronTypescript,
  'react-electron-ts': reactElectronTypescript,
};
