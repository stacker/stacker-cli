Stacker
=======

[![Twitter Follow](https://img.shields.io/twitter/follow/StackerHQ.svg?style=social?maxAge=2592000)](https://twitter.com/StackerHQ)
[![Version](https://img.shields.io/npm/v/stacker.svg)](https://www.npmjs.com/package/stacker-cli)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/StackerHQ/stacker-cli/blob/master/LICENSE)
[![dependencies](https://david-dm.org/StackerHQ/stacker-cli.svg)](https://david-dm.org/StackerHQ/stacker-cli)
[![devDependency Status](https://david-dm.org/StackerHQ/stacker-cli/dev-status.svg)](https://david-dm.org/StackerHQ/stacker-cli#info=devDependencies)

> Simple Application Environments

Stacker is a simple tool for defining application environments, aka *stacks*. Each stack is optimized for **development** and for **production** use as well. Stacker is built on top of Docker and Docker Compose as an abstraction layer. The main paradigm followed in designing Stacker was **convention over configuration**.

## :checkered_flag: Instalation

Install the CLI app globally using NPM.

```bash
# install stacker
npm install -g stacker-cli

# make sure it's working
stacker --version
```

## :fire: Getting Started

Before going further, make sure you `cd` into the root path of your project (`cd ~/Projects/test-project`).

1. Generate the `stacker.yaml` file

  ```bash
  $ stacker init
  ```

  If your project already has a `stacker.yaml` file, this step is not required.

2. Setup the project on your local machine

  ```bash
  $ stacker link
  ```

  This will do several things

  - create a local IP alias (eg. `127.20.17.1`)
  - setup your chosen domain name in `/etc/hosts`
  - add the project to the projects list

3. Start your application

  ```bash
  $ stacker start
  ```

  After this you will be able to reach your application using the domain name you choose previously. (eg. `test-project.dev`)

## :book: Commands

Here are the sub-commands for `stacker` CLI.

### `$ stacker init`

Generates `stacker.yaml` based on your responses.

| Type | Name | Description | Required |
| --- | --- | --- | --- |
| argument | `[stack]` | Stack name | no |
| option | `-y | --defaults` | Use default options | no |

### `$ stacker link`

- creates a local IP alias (eg. `127.20.17.1`)
- adds your chosen domain name in `/etc/hosts`
- adds the project to the projects list

### `$ stacker link`

Does the opposite of `stacker link`.

### `$ stacker build`

Builds the project.

| Type | Name | Description | Required |
| --- | --- | --- | --- |
| option | `--dir` | Build path | no |
| option | `--ip` | IP address | no |

### `$ stacker start`

Builds the project and starts the application.

| Type | Name | Description | Required |
| --- | --- | --- | --- |
| option | `--dir` | Build path | no |
| option | `--ip` | IP address | no |

### `$ stacker stop`

Stops the application.

| Type | Name | Description | Required |
| --- | --- | --- | --- |
| option | `--dir` | Build path | no |

### `$ stacker restart`

Restarts the application.

| Type | Name | Description | Required |
| --- | --- | --- | --- |
| option | `--dir` | Build path | no |

### `$ stacker run`

Executes a pre-defined shell command.

| Type | Name | Description | Required |
| --- | --- | --- | --- |
| argument | `[command]` | Runnable name | no |

### `$ stacker eject`

Ejects a config file so you'll be able to customize it.

| Type | Name | Description | Required |
| --- | --- | --- | --- |
| argument | `[file]` | Ejectable name | no |

### `$ stacker links`

Displays all the linked projects.

## :scroll: License

MIT @ [Stacker](https://twitter.com/StackerHQ)