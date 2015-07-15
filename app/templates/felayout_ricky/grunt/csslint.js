module.exports = {
    options: {
        csslintrc: '.csslintrc'
    },
    lint: {
        options: {
            import: false
        },
        src: ['<%= tmp %>/main.css']
    }
};
