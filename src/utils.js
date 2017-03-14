import { ChildProcess } from 'child_process';

import { StackConfig, StackManager } from 'stacker-core';

export function getStackConfig(path = process.cwd()) {
  return StackConfig.loadRecursive(path);
}

export async function getStackManager(path = process.cwd()) {
  const config = await getStackConfig(path);

  if (!config) throw new Error('This project is not initialized yet. Run "stacker init".');

  return new StackManager(config);
}

export function catchErrors(handle) {
  return async function (args, options, logger) {
    try {
      const result = await handle(args, options, logger);

      if (result instanceof ChildProcess) {
        result.on('exit', code => process.exit(code));
      }
    } catch (error) {
      logger.error(error.message);
    }
  };
}
