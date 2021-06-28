const fs = require('fs');
const { execSync } = require('child_process');
const sh = execSync;

(async function main() {
  // create plain lib folder
  fs.rmdirSync('./lib', { recursive: true });
  fs.mkdirSync('./lib');

  // prepare source
  sh('npx rollup -c');
  addShebangLineSync();
})().catch((err) => {
  if (err) throw err;
});

/**
 * add shebang line to top of index.js
 */
function addShebangLineSync() {
  const data = fs.readFileSync('./lib/index.js', 'utf-8');
  const newValue = '#!/usr/bin/env node\n' + data;
  fs.writeFileSync('./lib/index.js', newValue, 'utf-8');
}
