module.exports = {
    main: {
        options: {
            sourceMap: true,
            sourceMapFilename: '<%= temp %>/main.css.map',
            sourceMapURL: 'main.css.map'
        },
        files: {
            '<%= temp %>/main.css': '<%= dev %>/styles/main.less'
        }
    },
    bootstrap: {
        files: {
            '<%= temp %>/bootstrap.css': '<%= dev %>/styles/bootstrap.less'
        }
    },
    local: {
        files: {
            '<%= temp %>/local.css': '<%= dev %>/styles/local.less'
        }
    },
    components: {
        options: {
            sourceMap: false
        },
        files: {
            '<%= temp %>/components.css': '<%= dev %>/styles/components.less'
        }
    }
};
