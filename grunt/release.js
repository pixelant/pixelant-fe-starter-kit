module.exports = {
    options: {
        changelog: true,
        changelogText: '#### v<%= version %> `<%= grunt.template.today("yyyy-mm-dd") %>`\n',
        // add: false,
        // commit: false,
        // tag: false,
        // push: false,
        // pushTags: false,
        // npm: false,
        npmtag: false, //default: no tag
        indentation: '\t', //default: '  ' (two spaces)
        commitMessage: '[RELEASE] <%= version %>'
    }
};
