# Pixelant Front-End Starter Kit

[![GitHub version](https://badge.fury.io/gh/pixelant%2Fpixelant-fe-starter-kit.svg)](http://badge.fury.io/gh/pixelant%2Fpixelant-fe-starter-kit)
[![Build Status](https://travis-ci.org/pixelant/pixelant-fe-starter-kit.svg?branch=master)](https://travis-ci.org/pixelant/pixelant-fe-starter-kit)
[![npm](https://img.shields.io/npm/dm/generator-fe-kit.svg)](https://www.npmjs.com/package/generator-fe-kit)

![fe-kit](https://github.com/dmh/img/blob/master/fe-kit.jpg)

### [CHANGELOG](https://github.com/pixelant/pixelant-fe-starter-kit/blob/master/CHANGELOG.md)

### Required dependencies:

* Git
* [NodeJs](http://nodejs.org/)
    - **Node Version >=0.12.2**
    - **NPM Version >=2.11.0**
* [Bower](http://bower.io/) `npm install -g bower` **Version >=1.4.1**
* [Grunt-cli](http://gruntjs.com/) `npm install -g grunt-cli` **Version >=0.1.13**
* [Yeoman](http://yeoman.io/) `npm install -g yo` **Version >=1.4.7**

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
  * Big project _(for big projects)_
  * Medium project _(for medium projects ex-felayout_ricky)_
  * Complex project _(TBD...)_
  * Static site _(static sites, promo sites, one page applications)_
  * Front-End workflow _(experimental, AngularJS, React, Meteor, Mobile apps, etc...)_
  * felayout_ricky _(old Front-End patterns)_
* Enter name of project
* Create repository in bitbucket
* Add ssh link from created repository
* etc... (depend on type of project)

![fe-kit](https://github.com/dmh/img/blob/master/fe-kit.gif)

### To update Pixelant Front-End Starter Kit generator run:

`npm update -g generator-fe-kit`


# Contributing

Everyone can add feedback, bug reports and fixes. Here is several rules for contribute this repository. Please keep this in mind for better cooperation.


## Issues

If you have a question(feature) not covered in the documentation or want to report a bug, the best way to ensure it gets addressed is to file it in the appropriate issues tracker. Please check that you've completed the following steps:

* Make sure you're on the right version of [dependencies](https://github.com/pixelant/pixelant-fe-starter-kit/blob/master/readme.md#required-dependencies)
* Make sure you're on the latest version of generator npm update -g generator-fe-kit
* Used the search feature to ensure that the bug hasn't been reported before
Included as much information about the bug as possible, including any output you've received, what OS and version you're on, etc.
* Try to reduce your code to the bare minimum required to reproduce the issue. This makes it much easier (and much faster) to isolate and fix the issue.


## Pull Requests

* Please check to make sure that there aren't existing pull requests attempting to address the issue mentioned. We also recommend checking for issues related to the issue on the tracker, as a team member may be working on the issue in a branch or fork.
* Non-trivial changes should be discussed in an issue first
* Develop in a topic branch, not master
* Follow [Style Guides](https://github.com/pixelant/pixelant-fe-starter-kit/blob/master/readme.md#style-guide)
* Write a convincing description of your PR and why we should land it


## Internal Fixes (Pixelant team)

If you want to fix bug by yourself or add new features, you have to use steps listed below.

* TBD...


## Style Guides
This project uses special rules and style guides. Those rules you can find on appropriate files: `.jscsrc .jshintrc .htmlhintrc .csslintrc .editorconfig` 

* [htmlhint](https://github.com/yaniswang/HTMLHint/wiki/Rules)
* [jscs](http://jscs.info/rules.html)
* [jshint](http://jshint.com/docs/options)
* [csslint](https://github.com/CSSLint/csslint/wiki/Rules)
* [editorconfig](http://editorconfig.org)

Please ensure any pull requests of fixes follow this closely. If you notice existing code which doesn't follow these practices, feel free to shout and we will address this.

***

<img src="https://github.com/dmh/img/blob/master/P.png" alt="pixelant" width="100px">
###[Pixelant](http://www.pixelant.se/)
