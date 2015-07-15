module.exports = {
    html: {
        files: ['<%= dev %>/templates/**/*.hbs'],
        tasks: ['assemble:all']
    },
    less: {
        files: ['<%= dev %>/styles/**/*.less', '!<%= dev %>/styles/bootstrap.less', '!<%= dev %>/styles/variables.less', '!<%= dev %>/styles/components.less'],
        tasks: ['less:dev', 'autoprefixer']
    },
    lessBootstrap: {
        files: ['<%= dev %>/styles/bootstrap.less', '<%= dev %>/styles/variables.less', '<%= dev %>/styles/customVariables.less'],
        tasks: ['less:bootstrap']
    },
    lessComponents: {
        files: ['<%= dev %>/styles/components.less'],
        tasks: ['less:components']
    },
    jsMain: {
        files: ['<%= dev %>/js/{,*/}*.js', '!<%= dev %>/js/local.js','!<%= dev %>/js/local/{,*/}*.js'],
        tasks: 'import:js'
    },
    jsLocal: {
        files: ['<%= dev %>/js/local.js','<%= dev %>/js/local/{,*/}*.js'],
        tasks: 'import:localJs'
    },
    copy: {
        files: ['<%= dev %>/images/{,*/}*.*', '<%= dev %>/fonts/{,*/}*.*', '<%= dev %>/copyToRoot/{,*/}*.*'],
        tasks: ['newer:copy:tmp', 'newer:copy:toRoot']
    },
    livereload: {
        options: {
            interrupt: true,
            livereload: 35729
        },
        files: [
            '<%= tmp %>/*.html',
            '<%= tmp %>/*.css',
            '<%= tmp %>/*.js',
            '<%= tmp %>/images/{,*/}*.*',
            '<%= tmp %>/fonts/{,*/}*.*',
            '<%= tmp %>/*.{ico,png,txt,xml}'
        ]
    }
};
