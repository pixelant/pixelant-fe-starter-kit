module.exports = {
    go: {
        options: {
            version: null,
            changelog: 'CHANGELOG.md',
            labels: ['[FEATURE]', '[BUGFIX]', '[DOC]', '[STYLE]', '[CHORE]', '[TEST]', '[CLEANUP]'],
            template: {
                file: 'changelog.tpl',
            },
            write: true,
        }
    },
    test: {
        options: {
            version: null,
            changelog: 'CHANGELOG.md',
            labels: ['[FEATURE]', '[BUGFIX]', '[DOC]', '[STYLE]', '[CHORE]', '[TEST]', '[CLEANUP]'],
            template: {
                file: 'changelog.tpl',
            },
            write: false,
        }
    }
};

// Labels INFO

// [FEATURE]: A new feature
// [BUGFIX]: A bug fix
// [DOC]: Documentation only changes
// [STYLE]: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// [TEST]: Adding missing tests
// [CHORE]: Changes to the build process or auxiliary tools and libraries such as documentation generation
