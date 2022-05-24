---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'
title: A Gentle Introduction to Git
publishDate: 2022 Feb 15
draft: true
---
## An Imperfect Tool
Git is an imperfect tool. It's incredibly useful, but at the end of the day, the tool is imperfect because **you need to know how it works to use it effectively**.

You may be thinking, "Well, that's obvious, Kevin. Of course you need to know how something works to use it." So let me clarify - **you need to know how it works _internally_ to use it effectively.**

I've got a microwave oven in my kitchen. It reheats food, pops popcorn, steams vegetables, melts chocolate -- you get the picture. It's a versatile appliance, and I use it a few times a week.

To use the microwave, I don't need to understand how it works. Of course, I need to understand the interface - know where the "Add 30 Seconds" button is so I can mash it until my food gets hot. But in general, I don't need to know that it has a [magnetron](https://en.wikipedia.org/wiki/Cavity_magnetron) or how the turntable motor works. If I can interface with it and get my food hot, I don't need to care how it works.

With Git, on the other hand, you can get by for a while by just memorizing a few commands, but the moment you run into difficulties, you'll need to know what happened and what went wrong. To diagnose the problems, you'll need to dive into the internals.

### Using the command line
The best way to learn git is to use it on the command line. Although many popular code editors and IDEs have tools built-in that help you manage git, using a GUI interface for managing git can easily become a crutch (personal experience). 

I highly recommend getting used to the commands on the command line before using a GUI. For the purposes of this tutorial, I assume you're using some flavor of `sh`, such as `bash` or `zsh`. This won't work in the Windows `cmd` program.

## Getting Started
### `init`
Let's create a new repository. Let's start by creating a directory on the command line and initializing a new repo.

```sh
mkdir my-repo
cd my-repo
git init
```

If you do an `ls -a` in your terminal, you should see that there's now a new directory that wasn't there before: `.git`! Let's `cd .git` and poke around and see what's there. Another `ls` reveals the following:
```
HEAD  branches  config  description  hooks  info  objects  refs
```

In short, `git init` takes your current folder and creates this 