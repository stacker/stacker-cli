import { getStackManager, catchErrors } from '../utils';


async function handle() {
  const manager = await getStackManager();

  return manager.stop();
}

function register(program) {
  program
    .command('stop', 'Stop project')
    .action(catchErrors(handle));
}

export default { register };
