import { StackConfig, StackManager } from 'stacker-core';

export async function getStackConfig(path = process.cwd()) {
  const config = await StackConfig.loadRecursive(path);

  if (!config) throw new Error('This project is not initialized yet. Run stacker init.');

  return config;
}

export async function getStackManager(path = process.cwd()) {
  const config = await getStackConfig(path);

  return new StackManager(config);
}

export function catchErrors(handle) {
  return async function (args, options, logger) {
    try {
      await handle(args, options, logger);
    } catch (error) {
      logger.error(error.message);
    }
  };
}
