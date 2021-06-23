export interface Argv {
  _: string[];
  folder: string;
  f: string;
  [x: string]: string | string[];
}

/**
 * obtain arguments from command line
 * @return {Argv} obtained arguments
 */
export function getArgv() {
  const res: Argv = { _: [], folder: '', f: '' };
  for (let i = 2; i < process.argv.length; i++) {
    const item = process.argv[i];
    if (item.slice(0, 1) === '-' && process.argv[i + 1]) {
      const key = item.slice(0, 2) === '--' ? item.slice(2) : item.slice(1);
      res[key] = process.argv[i + 1];
      i += 1;
    } else {
      res._.push(process.argv[i]);
    }
  }
  return res;
}
