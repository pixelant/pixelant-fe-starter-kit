module.exports = {
    options: {
        jshintrc: '.jshintrc',
        force: true,
        reporter: require('jshint-stylish')
    },
    js: {
        src: ['<%= dev %>/js/{,*/}*.js', '!<%= dev %>/js/main.js', '!<%= dev %>/js/local.js','!<%= dev %>/js/local/{,*/}*.js']
    },
    grunt: {
        src: ['Gruntfile.js', 'grunt/*.js']
    }
};
