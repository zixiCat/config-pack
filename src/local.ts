import fs from 'fs';
import path from 'path';
import Prompt from './prompt';
import { configMap } from './hashMap';

/**
 * download remote file
 * @param {string[]} target the names of config files downloaded from local
 * @param {string} destination the folder we download file/folder into
 */
export const downloadLocalFile = (target: string[], destination: string) => {
  target.forEach((i) => {
    const file = configMap[i];
    if (file) {
      destination && fs.mkdirSync(destination, { recursive: true });
      fs.copyFileSync(
        path.join(__dirname, '../config', file),
        path.join(
          process.cwd(),
          destination,
          // do not use .gitignore name directly or it will throw error somehow
          file !== 'gitignore' ? file : '.gitignore'
        )
      );
    } else {
      new Prompt().failed();
    }
  });
};
