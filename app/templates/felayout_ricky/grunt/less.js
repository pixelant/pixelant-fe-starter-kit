module.exports = {
    dev: {
        options: {
            sourceMap: true,
            sourceMapFilename: '.tmp/main.css.map',
            sourceMapURL: 'main.css.map'
        },
        files: {
            '<%= tmp %>/main.css': '<%= dev %>/styles/main.less'
        }
    },
    bootstrap: {
        files: {
            '<%= tmp %>/bootstrap.css': '<%= dev %>/styles/bootstrap.less'
        }
    },
    components: {
        files: {
            '<%= tmp %>/components.css': '<%= dev %>/styles/components.less'
        }
    }
};
