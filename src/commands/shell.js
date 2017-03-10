import inquirer from 'inquirer';

import { StackConfig, StackManager } from 'stacker-core';


async function getServiceName(stack) {
  const choices = stack.services.values().filter(service => service.shell).map(service => service.name);
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'service',
    message: 'Select service',
    choices,
  });
  return answers.service;
}

async function handle(args, options, logger) {
  const config = await StackConfig.loadRecursive(process.cwd());
  const manager = new StackManager(config);
  const service = args.service || await getServiceName(manager.stack);

  try {
    manager.shell(service);
  } catch (error) {
    logger.info(error.message);
  }
}

function register(program) {
  program
    .command('shell', 'Open shell')
    .alias('sh')
    .argument('[service]', 'Service name')
    .action(handle);
}

export default { register };
