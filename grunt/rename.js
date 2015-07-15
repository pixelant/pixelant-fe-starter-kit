module.exports = {
    // allGitignore: {
    //     src: 'app/templates/**/.gitignore',
    //     dest: 'app/templates/**/gitignore'
    // },
    // allGitignoreReverse: {
    //     src: 'app/templates/**/gitignore',
    //     dest: 'app/templates/**/.gitignore'
    // },
    felayoutGitignore: {
        src: '<%= felayout %>/.gitignore',
        dest: '<%= felayout %>/gitignore'
    },
    felayoutGitignoreReverse: {
        src: '<%= felayout %>/gitignore',
        dest: '<%= felayout %>/.gitignore'
    },
    bigGitignore: {
        src: '<%= big %>/.gitignore',
        dest: '<%= big %>/gitignore'
    },
    bigGitignoreReverse: {
        src: '<%= big %>/gitignore',
        dest: '<%= big %>/.gitignore'
    }
};
