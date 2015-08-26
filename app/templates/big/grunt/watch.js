module.exports = {
    html: {
        files: ['<%= dev %>/templates/**/*.hbs'],
        tasks: ['newer:assemble:allTemplates']
    },
    less: {
        files: ['<%= dev %>/styles/**/*.less', '!<%= dev %>/styles/bootstrap.less', '!<%= dev %>/styles/local.less', '!<%= dev %>/styles/components.less'],
        tasks: ['less:main', 'autoprefixer', 'csslint']
    },
    lessBootstrap: {
        files: ['<%= dev %>/styles/bootstrap.less', '<%= dev %>/styles/customVariables.less'],
        tasks: ['less:bootstrap']
    },
    lessComponents: {
        files: ['<%= dev %>/styles/components.less'],
        tasks: ['less:components']
    },
    lessLocal: {
        files: ['<%= dev %>/styles/local.less'],
        tasks: ['less:local']
    },
    jsMain: {
        files: ['<%= dev %>/js/**/*.js', '!<%= dev %>/js/local.js','!<%= dev %>/js/local/{,*/}*.js', '!<%= dev %>/js/components.js', '!<%= dev %>/js/bootstrap.js', '!<%= dev %>/js/jquery.js'],
        tasks: ['import:main', 'jshint:mainJs', 'jscs:mainJs']
    },
    jsLocal: {
        files: ['<%= dev %>/js/local.js','<%= dev %>/js/local/{,*/}*.js'],
        tasks: 'import:local'
    },
    jsComponents: {
        files: ['<%= dev %>/js/components.js'],
        tasks: 'import:components'
    },
    jsBootstrap: {
        files: ['<%= dev %>/js/bootstrap.js'],
        tasks: 'import:bootstrap'
    },
    copyFonts: {
        files: '<%= dev %>/fonts/{,*/}*.*',
        tasks: 'newer:copy:fonts'
    },
    copyImages: {
        files: '<%= dev %>/images/{,*/}*.*',
        tasks: 'newer:copy:images'
    },
    copyToRoot: {
        files: '<%= dev %>/copyToRoot/{,*/}*.*',
        tasks: 'newer:copy:toRoot'
    },
    customizer: {
        files: 'grunt/helpers/customizer/{,*/}*.*',
        tasks: ['newer:copy:customizerHelper', 'assemble:customizer']
    },
    livereload: {
        options: {
            interrupt: true,
            livereload: 35729
        },
        files: [
            '<%= temp %>/*.html',
            '<%= temp %>/*.css',
            '<%= temp %>/*.js',
            '<%= temp %>/images/{,*/}*.*',
            '<%= temp %>/fonts/{,*/}*.*',
            '<%= temp %>/*.{ico,png,txt,xml}'
        ]
    }
};
