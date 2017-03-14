import { getStackManager, catchErrors } from '../utils';


async function handle() {
  const manager = await getStackManager();

  return manager.down();
}

function register(program) {
  program
    .command('down', 'Stop & remove project')
    .action(catchErrors(handle));
}

export default { register };
