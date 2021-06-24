const fs = require('fs');
const { execSync } = require('child_process');
const sh = execSync;

(async function main() {
  // set default node env
  process.env.NODE_ENV = 'prod';

  // create plain lib folder
  fs.rmdirSync('./lib', { recursive: true });
  fs.mkdirSync('./lib');

  // generate source
  prepareLibSync();
  sh('npx rollup -c');
  addShebangLineSync();

  // publish to npm
  // sh('npm publish ./lib --access public');
})().catch((err) => {
  if (err) throw err;
});

/**
 * prepare library
 */
function prepareLibSync() {
  const settings = require(process.cwd() + '/package.json');

  const data = JSON.stringify(
    {
      name: settings.name,
      version: settings.version,
      description: settings.description,
      keywords: settings.keywords,
      homepage: settings.homepage,
      license: settings.license,
      author: settings.author,
      bin: settings.bin,
      repository: settings.repository,
    },
    null,
    2
  );

  fs.writeFileSync('./lib/package.json', data);
  fs.copyFileSync('README.md', './lib/README.md');
  fs.copyFileSync('CHANGELOG.md', './lib/CHANGELOG.md');
  fs.copyFileSync('LICENSE', './lib/LICENSE');
}

/**
 * add shebang line to top of index.js
 */
function addShebangLineSync() {
  const data = fs.readFileSync('./lib/index.js', 'utf-8');
  const newValue = '#!/usr/bin/env node\n' + data;
  fs.writeFileSync('./lib/index.js', newValue, 'utf-8');
}
