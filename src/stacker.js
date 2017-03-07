#!/usr/bin/env node

import program from 'caporal';

import pkg from '../package.json';

import build from './commands/build';
import eject from './commands/eject';
import init from './commands/init';
import link from './commands/link';
import links from './commands/links';
import restart from './commands/restart';
import run from './commands/run';
import start from './commands/start';
import stop from './commands/stop';
import unlink from './commands/unlink';


//
program.STRING = value => (typeof value === 'string' ? value : null);
//

program.version(pkg.version);

build.register(program);
eject.register(program);
init.register(program);
link.register(program);
links.register(program);
restart.register(program);
run.register(program);
start.register(program);
stop.register(program);
unlink.register(program);

program.parse(process.argv);
