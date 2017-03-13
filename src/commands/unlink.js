import inquirer from 'inquirer';
import { Links } from 'stacker-core';

import { catchErrors } from '../utils';


function confirmUnlink() {
  return inquirer.prompt({
    type: 'confirm',
    name: 'confirmed',
    message: 'Are you sure?',
  });
}

async function handle(args, options, logger) {
  const projectPath = process.cwd();
  const link = await Links.find({ projectPath });

  if (link === null) {
    logger.info('The project is not linked at all.');
  } else {
    const answers = await confirmUnlink();

    if (answers.confirmed) {
      await Links.remove(link._id);
      logger.info('The project was unlinked.');
    }
  }
}

function register(program) {
  program
    .command('unlink', 'Unlink project')
    .action(catchErrors(handle));
}

export default { register };
