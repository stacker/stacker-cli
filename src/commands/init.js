import inquirer from 'inquirer';
import { StackConfig, WordpressWizard, LaravelWizard } from 'stacker-core';

import { getStackConfig, catchErrors } from '../utils';


async function getStackName() {
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'stack',
    message: 'Select the stack',
    choices: [
      { value: 'wordpress', name: 'Wordpress' },
      { value: 'laravel', name: 'Laravel' },
    ],
  });
  return answers.stack;
}

function getWizard(stack) {
  if (stack === 'wordpress') return WordpressWizard;
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
  if (await getStackConfig()) throw new Error('The project is already initialized');

  const config = new StackConfig();

  config.stack = args.stack || await getStackName();
  config.options = options.defaults ? null : await getOptions(config.stack);

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
