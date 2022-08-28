# ansible playbooks

Playbooks for setting up Debian-based systems for different usecases.
The current playbooks are tailores specifically to Ubuntu 22.04 systems.

## Requirements

The `ansible-playbook` tool is needed.

On Ubuntu 22.04 this can be installed from the `anbible PPA`, which might need to be added:

```bash
$ sudo add-apt-repository --update ppa:ansible/ansible
$ sudo apt install ansible
```

## Getting started

Execute selected playbooks with the following command:

```bash
$ sudo ansible-playbook <playbook_name_here>.yaml
```
