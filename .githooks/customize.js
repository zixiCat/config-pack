const inquirer = require('inquirer');
const inquirerSearchList = require('inquirer-search-list');
const { spawn } = require('child_process');

const argv = process.argv.filter((i) => i[0] === '-' && i !== '-m' && i !== '--message');

const typeName = 'search-list';

inquirer.registerPrompt(typeName, inquirerSearchList);

inquirer
  .prompt([
    {
      type: typeName,
      name: 'type',
      loop: false,
      message: 'The type you want to select',
      choices: ['docs', 'feat', 'fix', 'chore', 'style', 'refactor', 'perf', 'test'],
    },
    {
      type: typeName,
      name: 'scope',
      loop: false,
      message: 'The scope you want to select',
      choices: [
        'base',
        'config',
        'template',
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
    const msg = `${answers.type}(${answers.scope}): ${answers.message.trim()}`;
    let command = `commit -m`;
    if (argv.length) {
      command = `commit ${argv.join(' ')} -m`;
    }
    spawn('git', [...command.split(' '), msg, '-n'], {
      cwd: process.cwd(),
      detached: false,
      stdio: 'inherit',
    });
  });