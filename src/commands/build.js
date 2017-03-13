import { getStackManager, catchErrors } from '../utils';


async function handle(args, options) {
  const manager = await getStackManager();

  if (options.ip) manager.setIpAddress(options.ip);

  manager.build();
}

function register(program) {
  program
    .command('build', 'Build project')
    .option('--ip', 'IP address', program.STRING)
    .action(catchErrors(handle));
}

export default { register };
