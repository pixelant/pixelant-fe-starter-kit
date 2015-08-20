module.exports = {
    options: {
        jshintrc: '.jshintrc',
        force: true,
        reporter: require('jshint-stylish')
    },
    mainJs: {
        src: ['<%= dev %>/js/{,*/}*.js', '!<%= dev %>/js/main.js', '!<%= dev %>/js/local.js', '!<%= dev %>/js/bootstrap.js', '!<%= dev %>/js/components.js', '!<%= dev %>/js/jquery.js', '!<%= dev %>/js/local/{,*/}*.js']
    },
    gruntConfigFiles: {
        src: ['Gruntfile.js', 'grunt/*.js']
    }
};
