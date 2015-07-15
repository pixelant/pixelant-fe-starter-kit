module.exports = {
    allGitignore: {
        src: 'app/templates/**/.gitignore',
        dest: 'app/templates/**/gitignore'
    },
    allGitignoreReverse: {
        src: '<%= felayout %>/gitignore',
        dest: '<%= felayout %>/.gitignore'
    }
    // felayoutGitignore: {
    //     src: '<%= felayout %>/.gitignore',
    //     dest: '<%= felayout %>/gitignore'
    // },
    // felayoutGitignoreReverse: {
    //     src: '<%= felayout %>/gitignore',
    //     dest: '<%= felayout %>/.gitignore'
    // }
    // bigGitignore: {
    //     src: '<%= felayout %>/.gitignore',
    //     dest: '<%= felayout %>/gitignore'
    // },
    // bigGitignoreReverse: {
    //     src: '<%= felayout %>/gitignore',
    //     dest: '<%= felayout %>/.gitignore'
    // }
};
