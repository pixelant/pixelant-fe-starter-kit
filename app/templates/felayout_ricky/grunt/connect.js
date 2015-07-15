module.exports = {
    options: {
        port: 9004,
        livereload: 35729,
        hostname: '0.0.0.0'
        // hostname: 'localhost'
    },
    tmp: {
        options: {
            base: ['.','<%= tmp %>'],
            open: 'http://localhost:' + 9004
        }
    },
    site: {
        options: {
            port: 9005,
            base: '<%= site %>',
            open: 'http://localhost:' + 9005,
            livereload: false,
            keepalive: true
        }
    }
};
