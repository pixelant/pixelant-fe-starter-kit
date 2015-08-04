module.exports = {
    installBig: {
        options: {
            stderr: false,
            execOptions: {
                cwd: 'app/templates/big'
            }
        },
        command: [
            'npm install',
            'bower install',
        ].join('&&')
    },
    installFElayout: {
        options: {
            stderr: false,
            execOptions: {
                cwd: 'app/templates/felayout_ricky'
            }
        },
        command: [
            'npm install',
            'bower install',
        ].join('&&')
    },
    gitPush: {
        command: 'git push'
    },
    gitCommit: {
        command: 'git commit -a -m \'update\''
    },
    gitAdd: {
        command: 'git add .'
    },
    release: {
        ver: '',
        command: 'grunt release:<%= shell.release.ver %>'
    },
    testRelease: {
        ver: '',
        command: 'grunt release:<%= shell.release.ver %> --no-write'
    }
};
