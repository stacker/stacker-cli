import inquirer from 'inquirer';

import { getStackManager, catchErrors } from '../utils';


async function getServiceName(stack) {
  const choices = stack.services.values()
    .filter(service => service.shell)
    .map(service => service.name);
  const answers = await inquirer.prompt({
    type: 'list',
    name: 'service',
    message: 'Select service',
    choices,
  });
  return answers.service;
}

async function handle(args) {
  const manager = await getStackManager();
  const service = args.service || await getServiceName(manager.stack);
  manager.shell(service);
}

function register(program) {
  program
    .command('shell', 'Open shell')
    .alias('sh')
    .argument('[service]', 'Service name')
    .action(catchErrors(handle));
}

export default { register };
