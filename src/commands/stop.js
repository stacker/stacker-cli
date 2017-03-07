import { StackConfig, StackManager } from 'stacker-core';


async function handle(args, options, logger) {
  const config = await StackConfig.loadRecursive(process.cwd());
  const manager = new StackManager(config);

  if (options.dir) manager.setBuildPath(options.dir);

  await manager.stop();

  logger.info('Done.');
}

function register(program) {
  program
    .command('stop', 'Stop project')
    .option('--dir', 'Build path', program.STRING)
    .action(handle);
}

export default { register };
