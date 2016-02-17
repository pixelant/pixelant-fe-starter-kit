var generators = require('yeoman-generator');
var chalk = require('chalk');
var updateNotifier = require('update-notifier');
var ast = require('ast-query');

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
        const pkg = require('../package.json');
        const notifier = updateNotifier({pkg});
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
                            name: gray('Static site'),
                            value: 'site'
                        },
                        {
                            name: gray('Front-End workflow (experimental)'),
                            value: 'fe'
                        },
                        {
                            name: 'felayout_t3kit',
                            value: 'felayout_t3kit'
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
                    if (answers.projectType === 'site' || answers.projectType === 'fe') {
                        that.log(answers.projectType + warning(' under construction. Choose another type'));
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
            var installDependencies = {
                message: 'Install npm/bower dependencies?',
                name: 'confirmed',
                type: 'confirm',
                default: true
            };

            //  ============================================
            //  felayout_t3kit =============================
            //  ============================================
            if (this.projectType === 'felayout_t3kit') {
                prompts.push(projectName);
                prompts.push(repo);
                prompts.push(hook);
                prompts.push(sshLink);
                prompts.push(git);
                prompts.push(installDependencies);
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

    configuring: {
        parsePackageJson: function() {
            this.packageJson = this.fs.readJSON(this.templatePath() + '/' + this.projectType + '/package.json');
            this.packageJsonVersion = this.packageJson.version;
            this.packageJson.name = this.projectName;
            this.packageJson.version = '0.0.1';
            this.packageJson.description = 'Front-End layout for ' + this.projectName + ' project';
        },
        parseBowerJson: function() {
            this.bowerJson = this.fs.readJSON(this.templatePath() + '/' + this.projectType + '/bower.json');
            this.bowerJson.name = this.projectName;
        },
        parseGruntfile: function() {
            this.readGruntfile = this.fs.read(this.templatePath() + '/' + this.projectType + '/Gruntfile.js');
            this.gruntfileTree = ast(this.readGruntfile);
            this.gruntfileTree.var('remoteBranch').value('\'site\'');
            this.gruntfileTree.var('remoteRepo').value('\'' + this.sshLink + '\'');
        },

    },

    // default: {
    // },

    writing: function() {
        this.fs.copy([
            this.templatePath() + '/' + this.projectType + '/**',
            this.templatePath() + '/' + this.projectType + '/**/.*',
            '!**/{Gruntfile.js,bower.json,package.json,.git,README.md}/**'],
            this.destinationPath()
        );
        this.fs.writeJSON(this.destinationPath('package.json'), this.packageJson);
        this.fs.writeJSON(this.destinationPath('bower.json'), this.bowerJson);
        this.fs.write(this.destinationPath('Gruntfile.js'), this.gruntfileTree.toString());
        this.fs.copyTpl(
            this.templatePath('README.md'),
            this.destinationPath('README.md'),
            { projectName: this.projectName,  projectType: this.projectType,  packageVersion: this.packageJsonVersion }
        );
        // if (this.projectType === 'felayout_t3kit') {
        //     this.fs.writeJSON( this.destinationPath('package.json'), this.packageJson);
        // }
    },
    install: {
        installDependencies: function() {
            if (this.installDependencies) {
                this.npmInstall();
                this.bowerInstall();
            }
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
            if (!this.installDependencies) {
                this.log(warning('\nYou need to install npm/bower dependencies manually\n') +
                    inverse('npm install\n' + 'bower install\n')
                );
            }
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
