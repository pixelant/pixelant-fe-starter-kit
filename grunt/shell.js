module.exports = {
    release: {
        ver: '',
        command: 'grunt release:<%= shell.release.ver %>'
    },
    testRelease: {
        ver: '',
        command: 'grunt release:<%= shell.release.ver %> --no-write'
    }
};
