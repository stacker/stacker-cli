import path from 'path';
import inquirer from 'inquirer';
import { Links, titleCase } from 'stacker-core';

import { catchErrors } from '../utils';


function promptProjectName() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Project Name',
      default: titleCase(path.basename(process.cwd())),
    },
    {
      type: 'input',
      name: 'host',
      message: 'Hostname',
      default: `${path.basename(process.cwd())}.dev`,
    },
  ]);
}

async function handle(args, options, logger) {
  const projectPath = process.cwd();
  const link = await Links.find({ projectPath });

  if (link !== null) {
    logger.info('This project is already linked.');
  } else {
    const answers = await promptProjectName();
    const data = {
      name: answers.name,
      host: answers.host,
      projectPath,
    };
    const link = await Links.create(data);

    logger.info('The project was linked.', link);
  }
}

function register(program) {
  program
    .command('link', 'Link project')
    .action(catchErrors(handle));
}

export default { register };
