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
    }
};
