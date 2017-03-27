## :book: Documentation

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

### `$ stacker unlink`

Does the opposite of `stacker link`.

### `$ stacker up`

Builds and starts the project.

| Type | Name | Description | Required |
| --- | --- | --- | --- |
| option | `--ip` | IP address | no |
| option | `--detached` (`-d`) | Detached mode | no |

### `$ stacker build`

Builds the project.

| Type | Name | Description | Required |
| --- | --- | --- | --- |
| option | `--ip` | IP address | no |

### `$ stacker start`

Starts the application.

### `$ stacker stop`

Stops the application.

### `$ stacker restart`

Restarts the application.

### `$ stacker down`

Removes and stops the application.

### `$ stacker shell`

Opens an interactive shell for a given service.

| Type | Name | Description | Required |
| --- | --- | --- | --- |
| argument | `[service]` | Service name | no |

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