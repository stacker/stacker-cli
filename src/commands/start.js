import { getStackManager, catchErrors } from '../utils';


async function handle() {
  const manager = await getStackManager();

  return manager.start();
}

function register(program) {
  program
    .command('start', 'Start project')
    .action(catchErrors(handle));
}

export default { register };
