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

Execute selected playbooks with the following command:

```bash
$ ansible-playbook --ask-become-pass <playbook_name_here>.yaml
```

## Related tools

### Howto install gTile

gTile is a gnome-shell extension that improves window tiling capabilities of stock gnome-shell.

Installation steps:

1. Run playbook `basic.yaml`, which installs `gnome-shell-extensions`.

2. In Firefox, install add-on `GNOME Shell integration`.

3. Install the Gtile extention [here](https://extensions.gnome.org/extension/28/gtile/), by clicking the slider button at the web page's top-right.

4. Run `gTile` with it's global keyboard shortcut `SUPER` + `ENTER`.