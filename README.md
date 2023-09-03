# Ansible Playbooks

A collection of playbooks for setting up Debian-based systems.

## Requirements

The `ansible-playbook` tool is needed.

### Debian 12

On Debian, install with `apt`:

```bash
$ sudo apt install ansible
```

### Ubuntu / pop!_OS 22.04

`ansible-playbook` can be installed from the `anbible PPA`:

```bash
$ sudo add-apt-repository --update ppa:ansible/ansible
$ sudo apt install ansible
```

## Getting started

Execute selected playbooks with the following command,  
which will prompt entering the `become` password:

```bash
$ ansible-playbook -K <playbook_name_here>.yaml
```
