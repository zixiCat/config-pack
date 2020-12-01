# config-pack

My config pack, which contains many configurations for personal use. Hope it can help you.

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

#### [rollup.config.js](http://rollupjs.org/guide/en/)

A module bundler for JavaScript which compiles small pieces of code into something larger and more complex

```bash
powershell -command "Invoke-WebRequest 'https://raw.githubusercontent.com/zixiCat/config-pack/master/rollup.config.js' -OutFile 'rollup.config.js'"
```


#### [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

The configuration of TypeScript.

```bash
powershell -command "Invoke-WebRequest 'https://raw.githubusercontent.com/zixiCat/config-pack/master/tsconfig.json' -OutFile 'tsconfig.json'"
```


## Bug tracker

If you find a bug, please report it [here on Github](https://github.com/zixiCat/config-pack/issues)!
