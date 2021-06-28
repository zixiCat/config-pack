import fs from 'fs';
import path from 'path';
import { getArgv } from './argv';
import configMap from './configMap';

(async function main() {
  const params = getArgv();
  const folder = params.folder || params.f || '.';
  const file = params._;
  file.forEach((i) => {
    const file = configMap[i];
    if (file) {
      folder && fs.mkdirSync(folder, { recursive: true });

      fs.copyFileSync(
        path.join(__dirname, '../config', file),
        path.join(
          process.cwd(),
          folder,
          // do not use .gitignore name directly or it will throw error somehow
          file !== 'gitignore' ? file : '.gitignore'
        )
      );
    }
  });
})().catch((err) => {
  if (err) throw err;
});
