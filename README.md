Stacker
=======

[![Twitter Follow](https://img.shields.io/twitter/follow/StackerHQ.svg?style=social?maxAge=2592000)](https://twitter.com/StackerHQ)
[![Version](https://img.shields.io/npm/v/stacker-cli.svg)](https://www.npmjs.com/package/stacker-cli)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/stacker/stacker-cli/blob/master/LICENSE)
[![dependencies](https://david-dm.org/stacker/stacker-cli.svg)](https://david-dm.org/stacker/stacker-cli)
[![devDependency Status](https://david-dm.org/stacker/stacker-cli/dev-status.svg)](https://david-dm.org/stacker/stacker-cli#info=devDependencies)

> Docker Compose Templates

Stacker is a simple tool for defining application environments, aka *stacks*. Each stack is optimized for **development** and for **production** use as well. Stacker is built on top of Docker and Docker Compose as an abstraction layer. The main paradigm followed in designing Stacker was **convention over configuration**.

## :tv: Demo

<table>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=QA-AHdydEt4">
      <img height="100" src="https://s3-us-west-2.amazonaws.com/svgporn.com/logos/laravel.svg">
    </a></td>
    <td><a href="https://www.youtube.com/watch?v=wali9yZR8x0">
      <img height="100" src="https://s3-us-west-2.amazonaws.com/svgporn.com/logos/wordpress-icon.svg">
    </a></td>
  </tr>
  <tr>
    <td><a href="https://www.youtube.com/watch?v=QA-AHdydEt4">Laravel</a></td>
    <td><a href="https://www.youtube.com/watch?v=wali9yZR8x0">Wordpress</a></td>
  </tr>
</table>

## :checkered_flag: Installation

> Requirements: `node 6+`, `docker 17+`, `docker-compose 1.10+`.

Install the CLI app globally using NPM.

```bash
# install stacker
npm install -g stacker-cli

# make sure it's working
stacker --version
```

## :fire: Getting Started

Before going further, make sure you `cd` into the root path of your project (`cd ~/Projects/test-project`).

1. **Generate the `stacker.yaml` file**

    ```bash
    $ stacker init
    ```

    If your project already has a `stacker.yaml` file, this step is not required.

2. **Setup the project on your local machine**

    ```bash
    $ stacker link
    ```

    This will do several things

    - create a local IP alias (eg. `127.20.17.1`)
    - setup your chosen domain name in `/etc/hosts`
    - add the project to the projects list

3. **Build and start your application**

    ```bash
    $ stacker up
    ```

    After this you will be able to reach your application using the domain name you choose previously. (eg. `test-project.dev`)

## :hand: Add your favorite stack!

Is your stack missing? Please open an issue and we'll take care of it. Since we're not experts in all stacks, your input and guidance will be helpful to make a top notch stack. For the moment, we will keep all the stacks inside the official repos just to make sure they all follow best practices.

Here is a list of the stacks we want to add with your help: Symfony, Ruby on Rails, Django, Meteor, Play, Ghost. If you have other stacks in mind just let us know.

## :memo: Documentation

For full CLI reference, checkout the [DOCUMENTATION.md](DOCUMENTATION.md) file.

## :scroll: License

MIT @ [Stacker](https://twitter.com/StackerHQ)