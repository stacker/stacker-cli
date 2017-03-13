import { Links } from 'stacker-core';

import { catchErrors } from '../utils';


async function handle(args, options, logger) {
  const links = await Links.all();

  if (links.length) {
    links.forEach((link) => {
      logger.info(link);
      logger.info('\n');
    });
  } else {
    logger.info('No linked projects yet.');
  }
}

function register(program) {
  program
    .command('links', 'List linked projects')
    .action(catchErrors(handle));
}

export default { register };
