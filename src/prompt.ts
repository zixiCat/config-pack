/* eslint-disable no-console */

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const NC = '\x1b[0m'; // No Color

/**
 * print the info of running
 */
class Prompt {
  start = 0;
  fetching = () => {
    this.start = Number(new Date());
    console.log('Fetching data...');
  };
  failed = () => {
    throw new Error(`${RED}File was not found!${NC}`);
  };
  succeeded = () => {
    const consuming = (Number(new Date()) - this.start) / 1000;
    console.log(`Downloaded ${GREEN}successfully${NC} in ${consuming}s`);
  };
}

export default Prompt;
