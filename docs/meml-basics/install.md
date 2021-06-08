---
sidebar_position: 1
id: install
---

# Install MEML

## Requirements

To use MEML, you must install nodejs and npm on your system. For MacOS and Windows users, you can download and install it from their [official website](https://nodejs.dev/download/). Linux users can simply install it from their system's package manager.

## Installing MLD

Most people don't use MEML directly. Instead, they use `mld`, the MEML dev system. If you are familiar to cargo or parcel, it is inspired by by both. First install mld globally:

```sh
npm install -g mld
```

:::tip
If you get a permission error on MacOS or Linux, try running `npm` as root (with `sudo`)
:::

Now run `mld` in a terminal. You should get an output similar to:

```
Usage: mld [options] [command]

An experimental everything environment for meml

Options:
  -V, --version                output the version number
  -h, --help                   display help for command

Commands:
  init [directory]             Create a MEML project in the current or specified directory
  dev [directory]              Start a dev server in the current or specified directory
  build [options] [directory]  Build an optimized bundle for the current directory
  help [command]               display help for command
```

## Additional development tools

It is strongly recommended to install the following development tools on your system:

- [VSCode](https://code.visualstudio.com/)
