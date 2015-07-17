/* global describe */
/* global before */
/* global it */

'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;

describe('felayout', function() {
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

    it('creates expected files', function() {
        assert.file([
        'package.json',
        'bower.json',
        '.bowerrc',
        'Gruntfile.js',
        '.editorconfig',
        '.gitignore',
        '.gitattributes'
        ]);
    });

    it('Variable in README file', function() {
        assert.fileContent('README.md', 'test');
    });

    it('adds sshlink to Gruntfile.js', function() {
        assert.fileContent('Gruntfile.js', 'repo: \'skip\'');
    });

    it('adds name to package.json', function() {
        assert.fileContent('package.json', '"name": "test"');
    });

});
