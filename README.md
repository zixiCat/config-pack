# config-pack

My config pack, which contains many configurations for personal use. Hope it can help you (in continuously update).

Assuming you'd like one of them, you could use following **PowerShell** command line to download it to current path.

## Intro

#### [.eslintrc.js](https://eslint.org/docs/user-guide/configuring)

Find and fix problems in your JavaScript code

```bash
powershell -command "Invoke-WebRequest 'https://raw.githubusercontent.com/zixiCat/config-pack/master/.eslintrc.js' -OutFile '.eslintrc.js'"
```

#### [.versionrc.js](https://github.com/conventional-changelog/standard-version)

A utility for versioning using semver and CHANGELOG generation powered by Conventional Commits.

```bash
powershell -command "Invoke-WebRequest 'https://raw.githubusercontent.com/zixiCat/config-pack/master/.versionrc.js' -OutFile '.versionrc.js'"
```

#### [rollup.config.js](https://www.rollupjs.org/guide/en/#configuration-files)

A module bundler for JavaScript which compiles small pieces of code into something larger and more complex

```bash
powershell -command "Invoke-WebRequest 'https://raw.githubusercontent.com/zixiCat/config-pack/master/rollup.config.js' -OutFile 'rollup.config.js'"
```

#### [tsconfig.json](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

The configuration of TypeScript.

```bash
powershell -command "Invoke-WebRequest 'https://raw.githubusercontent.com/zixiCat/config-pack/master/tsconfig.json' -OutFile 'tsconfig.json'"
```

#### [.gitignore](https://docs.github.com/en/free-pro-team@latest/github/using-git/ignoring-files)

You can configure Git to ignore files you don't want to check in

```bash
powershell -command "Invoke-WebRequest 'https://raw.githubusercontent.com/zixiCat/config-pack/master/.gitignore' -OutFile '.gitignore'"
```


## Bug tracker

If you find a bug, please report it [here on Github](https://github.com/zixiCat/config-pack/issues)!
