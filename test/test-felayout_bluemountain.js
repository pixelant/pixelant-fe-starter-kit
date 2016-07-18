/*global describe, before, it*/

'use strict';
var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');

describe('fe-kit', function() {
    describe('felayout_bluemountain', function() {
        before(function(done) {
            helpers.run(path.join(__dirname, '../app'))
            .inDir(path.join(__dirname, '.tmp'))
            .withPrompts({
                projectType: 'felayout_bluemountain',
                projectName: 'test',
                remote: 'Skip',
                installDependencies: false,
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
        it('Adds name to package.json', function() {
            assert.fileContent('package.json', '"name": "test"');
        });
        it('Adds sshlink to Gruntfile.js', function() {
            assert.fileContent('Gruntfile.js', 'var remoteBranch = \'site\'');
        });

    });
});
