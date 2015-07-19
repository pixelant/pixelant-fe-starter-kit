module.exports = {

    // felayout_ricky ==============
    felayoutName: {
        overwrite: true,
        src: ['<%= felayout %>/README.md', '<%= felayout %>/package.json', '<%= felayout %>/bower.json'],
        replacements: [
            {
                from: /<%= projectName %>/g,
                to: 'felayout_ricky'
            }
        ]
    },
    felayoutNameReverse: {
        overwrite: true,
        options: {
            processTemplates: false
        },
        src: ['<%= felayout %>/README.md', '<%= felayout %>/package.json', '<%= felayout %>/bower.json'],
        replacements: [
            {
                from: 'felayout_ricky',
                to: function() {
                    return '<%= projectName %>';
                }
            }
        ]
    },
    felayoutLink: {
        src: ['<%= felayout %>/Gruntfile.js'],
        overwrite: true,
        replacements: [
            {
                from: /<%= sshLink %>/g,
                to: 'ssh'
            }
        ]
    },
    felayoutLinkReverse: {
        src: ['<%= felayout %>/Gruntfile.js'],
        overwrite: true,
        options: {
            processTemplates: false
        },
        replacements: [
            {
                from: 'ssh',
                to: function() {
                    return '<%= sshLink %>';
                }
            }
        ]
    },
    // =============================
    // =============================
    // =============================

    // big =========================
    bigName: {
        overwrite: true,
        src: ['<%= big %>/README.md', '<%= big %>/package.json', '<%= big %>/bower.json'],
        replacements: [
            {
                from: /<%= projectName %>/g,
                to: 'big'
            }
        ]
    },
    bigNameReverse: {
        overwrite: true,
        options: {
            processTemplates: false
        },
        src: ['<%= big %>/README.md', '<%= big %>/package.json', '<%= big %>/bower.json'],
        replacements: [
            {
                from: 'big',
                to: function() {
                    return '<%= projectName %>';
                }
            }
        ]
    },
    bigLink: {
        src: ['<%= big %>/Gruntfile.js'],
        overwrite: true,
        replacements: [
            {
                from: /<%= sshLink %>/g,
                to: 'ssh'
            }
        ]
    },
    bigLinkReverse: {
        src: ['<%= big %>/Gruntfile.js'],
        overwrite: true,
        options: {
            processTemplates: false
        },
        replacements: [
            {
                from: 'ssh',
                to: function() {
                    return '<%= sshLink %>';
                }
            }
        ]
    }
    // =============================

};
