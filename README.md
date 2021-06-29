# config-pack
[![NPM Status](https://img.shields.io/npm/v/config-pack.svg)](https://www.npmjs.com/package/config-pack)

My config pack, which contains some basic configurations or templates for personal use. Hope it can help you (in continuously update).

## Feature
- [x] Support for downloading config files directly
- [ ] Support for downloading the your remote files or folder from github directly (**upcoming**)

## Usage

Assuming you'd like one of them, you could use following **npm** command lines.

```sh
# download rollup.config.js to current path
npx config-pack rollup
# use `--folder` or `-f` to download them to specific path
npx config-pack -f my-app/config tsconfig eslint
```

## Supported configurations

Note: Behind the file names is their own command alias
#### [.eslintrc.js](https://eslint.org/docs/user-guide/configuring) [eslint | eslintrc]

Find and fix problems in your JavaScript code
#### [.versionrc.js](https://github.com/conventional-changelog/standard-version) [version | versionrc]

A utility for versioning using semver and CHANGELOG generation powered by Conventional Commits.
#### [rollup.config.js](https://www.rollupjs.org/guide/en/#configuration-files) [rollup]

A module bundler for JavaScript which compiles small pieces of code into something larger and more complex
#### [tsconfig.json](https://www.typescriptlang.org/docs/handbook/compiler-options.html) [ts | tsconfig | typescript]

The configuration of TypeScript.

#### [.gitignore](https://docs.github.com/en/free-pro-team@latest/github/using-git/ignoring-files) [gitignore]

You can configure Git to ignore files you don't want to check in
#### [LICENSE](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/licensing-a-repository) [license]

MIT LICENSE

## Bug tracker

If you find a bug, please report it [here on Github](https://github.com/zixiCat/config-pack/issues)!
