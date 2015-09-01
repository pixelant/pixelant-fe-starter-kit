module.exports = {
    jquery: {
        src: '<%= dev %>/js/jquery.js',
        dest: '<%= temp %>/jquery.js',
    },
    main: {
        src: '<%= dev %>/js/main.js',
        dest: '<%= temp %>/main.js',
    },
    bootstrap: {
        src: '<%= dev %>/js/bootstrap.js',
        dest: '<%= temp %>/bootstrap.js',
    },
    local: {
        src: '<%= dev %>/js/local.js',
        dest: '<%= temp %>/local.js',
    },
    components: {
        src: '<%= dev %>/js/components.js',
        dest: '<%= temp %>/components.js',
    },
    mainLess: {
        src: '<%= dev %>/styles/main.less',
        dest: '<%= temp %>/main.less',
    },
    bootstrapLess: {
        src: '<%= dev %>/styles/bootstrap.less',
        dest: '<%= temp %>/bootstrap.less',
    },
    localLess: {
        src: '<%= dev %>/styles/local.less',
        dest: '<%= temp %>/local.less',
    }
};
