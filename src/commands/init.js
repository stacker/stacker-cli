import inquirer from 'inquirer';
import { LaravelWizard } from 'stacker-core';

import { getStackConfig, catchErrors } from '../utils';


async function getStackName() {
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'stack',
    message: 'Select the stack',
    choices: [
      { value: 'laravel', name: 'Laravel' },
      { value: 'rails', name: 'Ruby on Rails' },
      { value: 'django', name: 'Django' },
    ],
  });
  return answers.stack;
}

function getWizard(stack) {
  if (stack === 'laravel') return LaravelWizard;
}

async function getOptions(stack) {
  const wizard = getWizard(stack);

  if (!wizard) return {};

  const questions = wizard.getQuestions();
  const answers = await inquirer.prompt(questions);

  return wizard.makeOptions(answers);
}

async function handle(args, options, logger) {
  const config = await getStackConfig();
  const stack = options.stack || await getStackName();

  config.stack = stack;
  config.options = options.defaults ? null : await getOptions(stack);

  await config.save(process.cwd());

  logger.info('Done.');
}

function register(program) {
  program
    .command('init', 'Init project')
    .argument('[stack]', 'Stack type', ['laravel'])
    .option('-y, --defaults', 'Use default options', program.BOOL, false)
    .action(catchErrors(handle));
}

export default { register };
