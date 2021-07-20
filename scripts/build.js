const fs = require('fs');
const { execSync } = require('child_process');
const sh = execSync;

(async function main() {
  // create plain lib folder
  fs.rmdirSync('./lib', { recursive: true });
  fs.mkdirSync('./lib');

  // prepare source
  sh('npx rollup -c');
})().catch((err) => {
  if (err) throw err;
});
