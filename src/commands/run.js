import inquirer from 'inquirer';
import { StackConfig, StackManager } from 'stacker-core';


async function getRunnableName(stack) {
  const choices = stack.runnables.entries().map(([name, ejectable]) => {
    return { value: name, name: ejectable.label };
  });
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'command',
    message: 'Select command',
    choices,
  });
  return answers.command;
}

async function handle(args, options, logger) {
  const config = await StackConfig.loadRecursive(process.cwd());
  const manager = new StackManager(config);
  const command = args.command || await getRunnableName(manager.stack);

  await manager.run(command);

  logger.info('Done.');
}

function register(program) {
  program
    .command('run', 'Run command')
    .argument('[command]', 'Runnable name')
    .action(handle);
}

export default { register };
