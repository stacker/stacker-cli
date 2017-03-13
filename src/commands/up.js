import { getStackManager, catchErrors } from '../utils';


async function handle(args, options) {
  const manager = await getStackManager();
  manager.up(options.detached);
}

function register(program) {
  program
    .command('up', 'Create & start project')
    .option('-d, --detached', 'Detached mode', program.BOOL, false)
    .action(catchErrors(handle));
}

export default { register };
