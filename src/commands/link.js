import path from 'path';
import inquirer from 'inquirer';
import { Links, titleCase } from 'stacker-core';


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
  const link = await Links.find({ path: process.cwd() });

  if (link !== null) {
    logger.info('This project is already linked.');
  } else {
    const answers = await promptProjectName();
    const data = {
      name: answers.name,
      projectPath: process.cwd(),
      host: answers.host,
    };
    const link = await Links.create(data);

    logger.info('The project was linked.', link);
  }
}

function register(program) {
  program
    .command('link', 'Link project')
    .action(handle);
}

export default { register };
