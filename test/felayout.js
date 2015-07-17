/*global describe, before, it*/

'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('fe-kit', function() {
    describe('felayout', function () {
        before(function(done) {
            helpers.run(path.join(__dirname, '../app'))
            .inDir(path.join(__dirname, '.felayout'))
            .withOptions({ 'skip-install': true })
            .withPrompts({
                features: [],
                projectType: 'felayout_ricky',
                projectName: 'test',
                repo: 'Done',
                hook: 'Done',
                sshLink: 'skip',
                confirmed: true
            })
            .on('end', done);
        });

        it('Creates expected files', function() {
            assert.file([
            'package.json',
            'bower.json',
            '.bowerrc',
            '.csslintrc',
            '.jscsrc',
            '.jshintrc',
            '.htmlhintrc',
            'Gruntfile.js',
            '.editorconfig',
            '.gitignore',
            '.gitattributes',
            'README.md'
            ]);
        });

        it('Creates expected directories', function() {
            assert.file([
            'grunt/',
            'dev/',
            'dev/js/',
            'dev/styles/',
            'dev/templates/',
            'dev/images/',
            'dev/fonts/',
            'dev/copyToRoot/'
            ]);
        });

        it('Adds header to README file', function() {
            assert.fileContent('README.md', 'test');
        });
        it('adds sshlink to Gruntfile.js', function() {
            assert.fileContent('Gruntfile.js', 'repo: \'skip\'');
        });
        it('adds name to package.json', function() {
            assert.fileContent('package.json', '"name": "test"');
        });
        it('adds version to package.json', function() {
            assert.fileContent('package.json', '"version": "0.0.1"');
        });

    });
});
