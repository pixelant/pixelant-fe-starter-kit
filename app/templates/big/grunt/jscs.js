module.exports = {
    options: {
        config: '.jscsrc',
        force: true
    },
    mainJs: {
        src: ['<%= dev %>/js/{,*/}*.js', '!<%= dev %>/js/main.js', '!<%= dev %>/js/local.js', '!<%= dev %>/js/bootstrap.js', '!<%= dev %>/js/jquery.js', '!<%= dev %>/js/components.js', '!<%= dev %>/js/local/{,*/}*.js']
    },
    gruntConfigFiles: {
        src: ['grunt/*.js', 'Gruntfile.js']
    }
};
