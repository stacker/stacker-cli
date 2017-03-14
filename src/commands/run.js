import inquirer from 'inquirer';

import { getStackManager, catchErrors } from '../utils';


async function getRunnableName(stack) {
  const choices = stack.runnables.entries().map(([name, ejectable]) => {
    return { value: name, name: ejectable.label };
  });

  if (!choices.length) throw new Error('This project has no runnables.');

  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Select command',
    choices,
  });

  return answers.command;
}

async function handle(args) {
  const manager = await getStackManager();
  const command = args.command || await getRunnableName(manager.stack);

  return manager.run(command);
}

function register(program) {
  program
    .command('run', 'Run command')
    .argument('[command]', 'Runnable name')
    .action(catchErrors(handle));
}

export default { register };
