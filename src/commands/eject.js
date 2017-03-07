import inquirer from 'inquirer';
import { StackConfig, StackManager } from 'stacker-core';


async function getEjectableName(stack) {
  const choices = stack.ejectables.entries().map(([name, ejectable]) => {
    return { value: name, name: ejectable.label };
  });
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'path',
    message: 'Select file',
    choices,
  });
  return answers.path;
}

async function handle(args, options, logger) {
  const config = await StackConfig.loadRecursive(process.cwd());
  const manager = new StackManager(config);
  const file = args.file || await getEjectableName(manager.stack);

  await manager.eject(file);

  logger.info('Done.');
}

function register(program) {
  program
    .command('eject', 'Eject file')
    .argument('[file]', 'Ejectable name')
    .action(handle);
}

export default { register };
