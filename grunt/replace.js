module.exports = {

    // felayout_ricky ==============
    felayoutName: {
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
    felayoutNameReverse: {
        overwrite: true,
        src: ['<%= felayout %>/README.md', '<%= felayout %>/package.json', '<%= felayout %>/bower.json'],
        replacements: [
            {
                from: /<%= projectName %>/g,
                to: 'felayout_ricky'
            }
        ]
    },
    felayoutLink: {
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
    felayoutLinkReverse: {
        src: ['<%= felayout %>/Gruntfile.js'],
        overwrite: true,
        replacements: [
            {
                from: /<%= sshLink %>/g,
                to: 'ssh'
            }
        ]
    },
    // =============================
    // =============================
    // =============================

    // big =========================
    // bigName: {
    //     overwrite: true,
    //     options: {
    //         processTemplates: false
    //     },
    //     src: ['<%= felayout %>/README.md', '<%= felayout %>/package.json', '<%= felayout %>/bower.json'],
    //     replacements: [
    //         {
    //             from: 'big',
    //             to: function() {
    //                 return '<%= projectName %>';
    //             }
    //         }
    //     ]
    // },
    // bigNameReverse: {
    //     overwrite: true,
    //     src: ['<%= felayout %>/README.md', '<%= felayout %>/package.json', '<%= felayout %>/bower.json'],
    //     replacements: [
    //         {
    //             from: /<%= projectName %>/g,
    //             to: 'big'
    //         }
    //     ]
    // },
    // bigLink: {
    //     src: ['<%= felayout %>/Gruntfile.js'],
    //     overwrite: true,
    //     options: {
    //         processTemplates: false
    //     },
    //     replacements: [
    //         {
    //             from: 'ssh',
    //             to: function() {
    //                 return '<%= sshLink %>';
    //             }
    //         }
    //     ]
    // },
    // bigLinkReverse: {
    //     src: ['<%= felayout %>/Gruntfile.js'],
    //     overwrite: true,
    //     replacements: [
    //         {
    //             from: /<%= sshLink %>/g,
    //             to: 'ssh'
    //         }
    //     ]
    // }
    // =============================

};
