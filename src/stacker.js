#!/usr/bin/env node

import program from 'caporal';
import updateNotifier from 'update-notifier';

import pkg from '../package.json';

import build from './commands/build';
import eject from './commands/eject';
import init from './commands/init';
import link from './commands/link';
import links from './commands/links';
import run from './commands/run';
import up from './commands/up';
import down from './commands/down';
import start from './commands/start';
import stop from './commands/stop';
import restart from './commands/restart';
import unlink from './commands/unlink';
import shell from './commands/shell';


// caporal hack

program.STRING = value => (typeof value === 'string' ? value : null);

// update notifications

updateNotifier({ pkg }).notify();

// register commands

program.version(pkg.version);

build.register(program);
eject.register(program);
init.register(program);
link.register(program);
links.register(program);
run.register(program);
up.register(program);
down.register(program);
start.register(program);
stop.register(program);
restart.register(program);
unlink.register(program);
shell.register(program);

program.parse(process.argv);
