module.exports = {
    gitPush: {
        command: 'git push'
    },
    gitCommit: {
        command: 'git commit -a -m \'reverse templates\''
    },
    gitAdd: {
        command: 'git add .'
    },
    release: {
        ver: '',
        command: 'grunt release:<%= shell.release.ver %>'
    },
    dryRelease: {
        ver: '',
        command: 'grunt release:<%= shell.release.ver %> --no-write'
    }
};
