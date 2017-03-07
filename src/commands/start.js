import { StackConfig, StackManager } from 'stacker-core';


async function handle(args, options, logger) {
  const config = await StackConfig.loadRecursive(process.cwd());
  const manager = new StackManager(config);

  if (options.dir) manager.setBuildPath(options.dir);
  if (options.ip) manager.setIpAddress(options.ip);

  await manager.build();
  await manager.start();

  logger.info('Done.');
}

function register(program) {
  program
    .command('start', 'Start project')
    .option('--dir', 'Build path', program.STRING)
    .option('--ip', 'IP address', program.STRING)
    .action(handle);
}

export default { register };
