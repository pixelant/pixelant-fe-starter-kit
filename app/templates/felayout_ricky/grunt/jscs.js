module.exports = {
    options: {
        config: '.jscsrc',
        force: true
    },
    js: {
        src: ['<%= dev %>/js/{,*/}*.js', '!<%= dev %>/js/main.js', '!<%= dev %>/js/local.js','!<%= dev %>/js/local/{,*/}*.js']
    },
    grunt: {
        src: ['grunt/*.js', 'Gruntfile.js']
    }
};
