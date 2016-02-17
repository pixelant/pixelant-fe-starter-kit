module.exports = {
    go: {
        options: {
            version: null,
            changelog: 'CHANGELOG.md',
            labels: ['[FEATURE]', '[FIX]', '[REFACTOR]', '[PERF]', '[DOC]', '[STYLE]', '[CHORE]', '[UPDATE]', '[TEST]'],
            template: {
                file: 'changelog.tpl',
            },
            matchers: {
                label: function(body) {
                    return body.match(/^([^\]]+)([^])/)[0];
                },
                subject: function(body) {
                    var re = body.match(/^([^\]]+)([^])/g);
                    return body.replace(new RegExp('\\' + re, 'g'), '');
                },
            },
            write: true,
        }
    },
    test: {
        options: {
            version: null,
            changelog: 'CHANGELOG.md',
            labels: ['[FEATURE]', '[FIX]', '[REFACTOR]', '[PERF]', '[DOC]', '[STYLE]', '[CHORE]', '[UPDATE]', '[TEST]'],
            template: {
                file: 'changelog.tpl',
            },
            matchers: {
                label: function(body) {
                    return body.match(/^([^\]]+)([^])/)[0];
                },
                subject: function(body) {
                    var re = body.match(/^([^\]]+)([^])/g);
                    return body.replace(new RegExp('\\' + re, 'g'), '');

                },
            },
            write: false,
        }
    }
};

// Labels INFO

// [FEATURE] A new feature
// [FIX] A bug fix
// [REFACTOR] A code change that neither fixes a bug or adds a feature
// [PERF] A code change that improves performance.
// [CHORE] Changes to the build process (grunt) or auxiliary tools and libraries such as documentation generation and linters (jshint, etc.)
// [DOC] Documentation only changes
// [STYLE] Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// [TEST] Adding missing tests
