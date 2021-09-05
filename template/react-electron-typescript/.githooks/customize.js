const inquirer = require('inquirer');
const { exec } = require('child_process');
const sh = exec;
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const NC = '\x1b[0m'; // No Color

const argv = process.argv.filter(
  (i) => i[0] === '-' && i !== '-m' && i !== '--message'
);

inquirer
  .prompt([
    {
      type: 'list',
      name: 'type',
      loop: false,
      message: 'The type you want to select',
      choices: [
        'docs',
        'feat',
        'fix',
        new inquirer.Separator(),
        'chore',
        'style',
        'refactor',
        'perf',
        'test',
      ],
    },
    {
      type: 'input',
      name: 'message',
      message: 'The message you want to commit:',
      validate(value) {
        return !!value.trim() || 'Please enter message';
      },
    },
  ])
  .then((answers) => {
    const msg = `${answers.type}: ${answers.message.trim()}`;
    const command = `git commit ${argv.join(' ')} -m "${msg}" -n`;
    sh(command, (error, stdout, stderr) => {
      if (error !== null) {
        console.error(`${error}`);
        console.log(
          `Please try to run ${RED}${command}${NC} to see more detail`
        );
      } else {
        console.log(`${GREEN}Succeeded!${NC}`);
      }
    });
  });