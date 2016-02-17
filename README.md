# Pixelant Front-End Starter Kit
### `generator-fe-kit`

[![npm version](https://badge.fury.io/js/generator-fe-kit.svg)](https://badge.fury.io/js/generator-fe-kit)
[![Build Status](https://travis-ci.org/pixelant/pixelant-fe-starter-kit.svg?branch=master)](https://travis-ci.org/pixelant/pixelant-fe-starter-kit)

![fe-kit](https://raw.githubusercontent.com/dmh/img/master/fe-kit.jpg)

### [CHANGELOG](https://github.com/pixelant/pixelant-fe-starter-kit/blob/master/CHANGELOG.md)

### Required dependencies:

### Required dependencies:

- [Git](https://git-scm.com/)
- [NodeJs](http://nodejs.org/) >=5.6.0
- [NPM](https://github.com/npm/npm) >=3.7.0
- [Bower](http://bower.io/) >=1.7.7 `npm install -g bower`
- [Grunt-cli](http://gruntjs.com/) >=0.1.13 `npm install -g grunt-cli`
- [Yeoman](http://yeoman.io/) >=1.6.0 `npm install -g yo`

***

### Getting started with Pixelant Front-End Starter Kit

* For start you'll need to install Pixelant Front-End Starter Kit generator:

```sh
npm install -g generator-fe-kit
```

* Now that the generator is installed, create a directory for your new project:

```sh
mkdir name-of-project
cd name-of-project
```

* and then run:

```sh
yo fe-kit
```

* Next you will get questions and instructions in terminal. Need to choose type of project
  * Static site _(static sites, promo sites, one page applications)_
  * Front-End workflow _(experimental, AngularJS, React, Meteor, Mobile apps, etc...)_
  * felayout_t3kit _(Front-End layout for **t3kit** project)_
* Enter name of project
* Create repository in bitbucket
* Add repo link from created repository
* Initialize git repository
* Install dependencies

![fe-kit](https://raw.githubusercontent.com/dmh/img/master/fe-kit.gif)

### To update Pixelant Front-End Starter Kit generator run:

`npm update -g generator-fe-kit`


# Contributing

Everyone can add feedback, bug reports and fixes. Here is several rules for contribute this repository. Please keep this in mind for better cooperation.


## Issues

If you have a question(feature) not covered in the documentation or want to report a bug, the best way to ensure it gets addressed is to file it in the appropriate issues tracker. Please check that you've completed the following steps:

* Make sure you're on the right version of [dependencies](#required-dependencies)
* Make sure you're on the latest version of generator npm update -g generator-fe-kit
* Used the search feature to ensure that the bug hasn't been reported before
Included as much information about the bug as possible, including any output you've received, what OS and version you're on, etc.
* Try to reduce your code to the bare minimum required to reproduce the issue. This makes it much easier (and much faster) to isolate and fix the issue.


## Pull Requests

* Please check to make sure that there aren't existing pull requests attempting to address the issue mentioned. We also recommend checking for issues related to the issue on the tracker, as a team member may be working on the issue in a branch or fork.
* Non-trivial changes should be discussed in an issue first
* Develop in a topic branch, not master
* Follow [Style Guides](#style-guide)
* Follow [Git commit conventions](#git-commit-conventions-and-output-formatting)
* Write a convincing description of your PR and why we should land it



## Style Guides
This project uses special rules and style guides. Those rules you can find on appropriate files: `.jscsrc .jshintrc .htmlhintrc .csslintrc .editorconfig`

* [htmlhint](https://github.com/yaniswang/HTMLHint/wiki/Rules)
* [jscs](http://jscs.info/rules.html)
* [jshint](http://jshint.com/docs/options)
* [csslint](https://github.com/CSSLint/csslint/wiki/Rules)
* [editorconfig](http://editorconfig.org)

Please ensure any pull requests of fixes **follow this closely**. If you notice existing code which doesn't follow these practices, feel free to shout and we will address this.


## Git commit conventions and output formatting
Please use semantic labels for your messages, but if commit message is not very important, you can skip labels. All commits with labels will be added in changelog, that's why it is important to use labels on your commits.

####Git labels:
* [FEATURE] A new feature
* [FIX] A bug fix
* [REFACTOR] A code change that neither fixes a bug or adds a feature
* [PERF] A code change that improves performance.
* [CHORE] Changes to the build process (grunt) or auxiliary tools and libraries such as documentation generation and linters (jshint, etc.)
* [DOC] Documentation only changes
* [STYLE] Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* [TEST] Adding missing tests
* [UPDATE] Updating git submodules

Please ensure any pull requests of fixes **follow this closely**. If you notice existing code which doesn't follow these practices, feel free to shout and we will address this.
***

![Pixelant](https://raw.githubusercontent.com/dmh/img/master/P.png)

[Pixelant](http://www.pixelant.se/)
