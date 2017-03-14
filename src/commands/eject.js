import inquirer from 'inquirer';

import { getStackManager, catchErrors } from '../utils';


async function getEjectableName(stack) {
  const choices = stack.ejectables.entries().map(([name, ejectable]) => {
    return { value: name, name: ejectable.label };
  });

  if (!choices.length) throw new Error('This project has no ejectables.');

  const answers = await inquirer.prompt({
    type: 'list',
    name: 'path',
    message: 'Select file',
    choices,
  });

  return answers.path;
}

async function handle(args, options, logger) {
  const manager = await getStackManager();
  const file = args.file || await getEjectableName(manager.stack);

  await manager.eject(file);

  logger.info('Done.');
}

function register(program) {
  program
    .command('eject', 'Eject file')
    .argument('[file]', 'Ejectable name')
    .action(catchErrors(handle));
}

export default { register };
