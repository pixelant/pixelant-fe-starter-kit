var semver = require('semver');
var grunt = require('grunt');
var chalk = require('chalk');
var pkg = grunt.file.readJSON('package.json');
module.exports = {
    ask: {
        options: {
            questions: [
                {
                    config: 'ask',
                    type: 'confirm',
                    message: 'Looks good?'
                },
            ]
        }
    },
    isMaster: {
        options: {
            questions: [
                {
                    config: 'master',
                    type: 'imput',
                    message: 'Is it branch ' + chalk.bold.yellow('master') + '?',
                    validate: function(value) {
                        if (value === 'yes') {
                            return true;
                        }
                        return chalk.bold.red('Checkout to branch master');
                    }
                },
            ]
        }
    },
    shell: {
        options: {
            questions: [
                {
                    config: 'shell.release.ver',
                    type: 'list',
                    message: 'Bump version from ' + pkg.version + ' to:',
                    choices: [
                        {
                            value: 'patch',
                            name: semver.inc(pkg.version, 'patch')
                        },
                        {
                            value: 'minor',
                            name: semver.inc(pkg.version, 'minor')
                        },
                        {
                            value: 'major',
                            name: semver.inc(pkg.version, 'major')
                        },
                        {
                            value: 'custom',
                            name: 'Specify version...'
                        }
                    ]
                },
                {
                    config: 'shell.release.ver',
                    type: 'input',
                    message: 'What specific version would you like',
                    when: function(answers) {
                        return answers['shell.release.ver'] === 'custom';
                    },
                },
            ]
        }
    }
};
