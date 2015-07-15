module.exports = {
    options: {
        jshintrc: '.jshintrc',
        force: true,
        reporter: require('jshint-stylish')
    },
    js: {
        src: ['Gruntfile.js', 'grunt/*.js', 'app/index.js']
    }
};
