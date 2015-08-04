var generators = require('yeoman-generator');
var chalk = require('chalk');
var updateNotifier = require('update-notifier');

// Colors
var warning = chalk.bold.red;
var success = chalk.bold.green;
var yellow = chalk.bold.yellow;
var blue = chalk.blue;
var gray = chalk.dim.gray;
var magenta = chalk.bold.magenta;
var inverse = chalk.inverse;

module.exports = generators.Base.extend({
    initializing: function() {
        this.pkg = require('../package.json');
        var notifier = updateNotifier({
            packageName: this.pkg.name,
            packageVersion: this.pkg.version
        });
        notifier.notify();
    },
    prompting: {
        projectType: function() {
            var done = this.async();
            var that = this;
            var prompts = [
                {
                    type: 'list',
                    name: 'projectType',
                    message: 'Project type:',
                    choices: [
                        {
                            name: gray('Big project'),
                            value: 'big'
                        },
                        {
                            name: gray('Medium project'),
                            value: 'medium'
                        },
                        {
                            name: gray('Complex project'),
                            value: 'complex'
                        },
                        {
                            name: gray('Static site'),
                            value: 'site'
                        },
                        {
                            name: gray('Front-End workflow (experimental)'),
                            value: 'fe'
                        },
                        {
                            name: 'felayout_ricky',
                            value: 'felayout_ricky'
                        }
                    ],
                },
                {
                    message: 'Is it right type of project?',
                    name: 'confirmed',
                    type: 'confirm',
                    default: true
                }
            ];
            var promptRecursive = function() {
                that.prompt(prompts, function(answers) {
                    if (answers.projectType === 'big' || answers.projectType === 'medium' || answers.projectType === 'complex' || answers.projectType === 'site' || answers.projectType === 'fe') {
                        that.log(answers.projectType + warning(' under construction. Choose another type.'));
                        promptRecursive();
                    } else {
                        if (!answers.confirmed) {
                            promptRecursive();
                        } else {
                            that.projectType = answers.projectType;
                            done();
                        }
                    }
                });
            };
            promptRecursive();
        },

        prompts: function() {
            var done = this.async();
            var that = this;
            var prompts = [];
            //  ============================================
            //  General prompts ============================
            //  ============================================
            var projectName = {
                type: 'input',
                name: 'projectName',
                message: 'Project Name',
                default: this.appname
            };
            var git = {
                message: 'Do you want automatically initialize' + yellow(' git ') + 'repo\nand push it to the server?',
                name: 'autoGit',
                type: 'confirm',
                default: true,
                when: function(answer) {
                    return answer.sshLink !== 'skip';
                }
            };
            var confirm = {
                message: 'Looks good?',
                name: 'confirmed',
                type: 'confirm',
                default: true
            };
            var repo = {
                type: 'input',
                name: 'repo',
                message: 'Need to create new repository on Bitbucket',
                default: 'Done',
                validate: function(answer) {
                    if (answer === 'y' || answer === 'Y' || answer === 'yes' || answer === 'Yes' || answer === 'Done' || answer === 'done') {
                        return true;
                    }
                    return warning('You must create repo before continuing');
                }
            };
            var hook = {
                type: 'input',
                name: 'hook',
                message: 'Need to add ' + yellow('POST Hook') + ' to your project on Bitbucket\n' + blue('http://54.216.37.235/bitbucketpost.php'),
                default: 'Done',
                validate: function(answer) {
                    if (answer === 'y' || answer === 'Y' || answer === 'yes' || answer === 'Yes' || answer === 'Done' || answer === 'done') {
                        return true;
                    }
                    return warning('You must add POST Hook before continuing');
                }
            };
            var sshLink = {
                type: 'input',
                name: 'sshLink',
                message: 'SSH link of your new repository on Bitbucket\n' + inverse('skip') + ' to skip this step',
                validate: function(answer) {
                    if (answer.length > 31 && answer.slice(0, 27) === 'git@bitbucket.org:pixelant/' && answer.slice(-4) === '.git' || answer === 'skip') {
                        return true;
                    }
                    return warning('Wrong repository link, try again...');
                }
            };

            //  ============================================
            //  felayout_ricky =============================
            //  ============================================
            if (this.projectType === 'felayout_ricky') {
                prompts.push(projectName);
                prompts.push(repo);
                prompts.push(hook);
                prompts.push(sshLink);
                prompts.push(git);
                prompts.push(confirm);
            }
            //  ********************************************
            //  --------------------------------------------

            //  ============================================
            //  big ========================================
            //  ============================================
            if (this.projectType === 'big') {
                prompts.push(projectName);
                prompts.push(repo);
                prompts.push(hook);
                prompts.push(sshLink);
                prompts.push(git);
                prompts.push(confirm);
            }
            //  ********************************************
            //  --------------------------------------------

            //  ============================================
            //  prompt recursive  func =====================
            //  ============================================
            var promptRecursive = function() {
                that.prompt(prompts, function(answers) {
                    if (!answers.confirmed) {
                        promptRecursive();
                    } else {
                        var prop;
                        for (prop in answers) {
                            that[prop] = answers[prop];
                        }
                        done();
                    }
                });
            };
            promptRecursive();
        },
    },
    // configuring: {
    // },
    default: {
        app: function() {
            this.directory(this.projectType + '/dev/copyToRoot', 'dev/copyToRoot');
            this.directory(this.projectType + '/dev/fonts', 'dev/fonts');
            this.directory(this.projectType + '/dev/images', 'dev/images');
            this.directory(this.projectType + '/dev/js', 'dev/js');
            this.directory(this.projectType + '/dev/styles', 'dev/styles');
            this.directory(this.projectType + '/dev/templates', 'dev/templates');
            this.bulkDirectory(this.projectType + '/grunt', 'grunt');
            this.copy(this.projectType + '/.jscsrc', '.jscsrc');
            this.copy(this.projectType + '/.jshintrc', '.jshintrc');
            this.copy(this.projectType + '/.htmlhintrc', '.htmlhintrc');
            this.copy(this.projectType + '/gitignore', '.gitignore');
            this.copy(this.projectType + '/.gitattributes', '.gitattributes');
            this.copy(this.projectType + '/.editorconfig', '.editorconfig');
            this.copy(this.projectType + '/.csslintrc', '.csslintrc');
            this.copy(this.projectType + '/.bowerrc', '.bowerrc');
            this.template(this.projectType + '/Gruntfile.js', 'Gruntfile.js');
            this.template(this.projectType + '/package.json', 'package.json');
            this.template(this.projectType + '/bower.json', 'bower.json');
            this.template(this.projectType + '/README.md', 'README.md');
            if (this.projectType === 'felayout_ricky') {
                this.directory(this.projectType + '/dev/helpers', 'dev/helpers');
            }
            // if (this.projectType === 'big') {
            // }
        },

    },
    // writing: {
    // },
    install: {
        npmAndBower: function() {
            this.npmInstall();
            this.bowerInstall();
        },
        gitInit: function() {
            var that = this;
            if (this.autoGit && this.sshLink !== 'skip') {
                this.spawnCommand('git', ['init', '-q']).on('close', function() {
                    that.spawnCommand('git', ['add', '--all']).on('close', function() {
                        that.spawnCommand('git', ['commit', '-m', '"[INITIAL COMMIT]"', '-q']).on('close', function() {
                            that.spawnCommand('git', ['remote', 'add', 'origin', that.sshLink]).on('close', function() {
                                that.spawnCommand('git', ['push', '-u', '-q', 'origin', 'master']);
                            });
                        });
                    });
                });
            }
        },
    },
    end: {
        endLog: function() {
            if (!this.autoGit) {
                this.log(warning('\nYou need to initialize new git repo\nand push it to the server manually\n') +
                    inverse('git init\n' +
                        'git add .\n' +
                        'git commit -m \'[INITIAL COMMIT]\'\n' +
                        'git remote add origin <<repo-link>>' + '\n' +
                        'git push -u origin master\n'
                        )
                    );
            }
            this.log(success('\nYou are all set now. ') + magenta('Happy coding!'));
        }
    }
});
