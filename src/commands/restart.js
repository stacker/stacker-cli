import { getStackManager, catchErrors } from '../utils';


async function handle(args) {
  const manager = await getStackManager();

  return manager.restart(args.service);
}

function register(program) {
  program
    .command('restart', 'Restart project')
    .argument('[service]', 'Service name')
    .action(catchErrors(handle));
}

export default { register };
