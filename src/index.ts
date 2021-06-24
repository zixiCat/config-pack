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

    file &&
      folder &&
      folder !== '.' &&
      fs.mkdirSync(folder, { recursive: true });

    file &&
      fs.copyFileSync(
        './config/' + file,
        path.join(process.cwd(), folder, file)
      );
  });
})().catch((err) => {
  if (err) throw err;
});
