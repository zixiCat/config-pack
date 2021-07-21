import fs from 'fs';
import path from 'path';

/**
 * copy directory and its all files
 * @param {String} source the source that need to be copied
 * @param {String} destination the destination where source is copied
 */
export const copyDirectorySync = (source: string, destination: string) => {
  fs.mkdirSync(destination, { recursive: true });

  fs.readdirSync(source, { withFileTypes: true }).forEach((entry) => {
    const sourcePath = path.join(source, entry.name);
    const destinationPath = path.join(destination, entry.name);

    entry.isDirectory()
      ? copyDirectorySync(sourcePath, destinationPath)
      : fs.copyFileSync(sourcePath, destinationPath);
  });
};

/**
 * clear last output log
 */
export const clearLastLine = () => {
  process.stdout.moveCursor(0, -1); // up one line
  process.stdout.clearLine(1); // from cursor to end
};
