import inquirer from 'inquirer';
import { StackConfig, LaravelWizard } from 'stacker-core';


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

async function getOptions(wizard) {
  const questions = wizard.getQuestions();
  const answers = await inquirer.prompt(questions);
  return wizard.makeOptions(answers);
}

async function handle(args, options, logger) {
  if (await StackConfig.load(process.cwd())) {
    logger.info('This project is already initialized.');
    return;
  }

  const config = new StackConfig();
  const stack = options.stack || await getStackName();
  const wizard = getWizard(stack);

  config.stack = stack;
  config.options = await getOptions(wizard);

  await config.save(process.cwd());

  logger.info('Done.');
}

function register(program) {
  program
    .command('init', 'Init project')
    .argument('[stack]', 'Stack type', ['laravel'])
    .option('-y, --defaults', 'Use default options', program.BOOL, false)
    .action(handle);
}

export default { register };
