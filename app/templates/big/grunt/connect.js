module.exports = {
    options: {
        port: 9004,
        livereload: 35729,
        hostname: '0.0.0.0'
    },
    localhost: {
        options: {
            base: ['.','<%= temp %>'],
            // open: 'http://localhost:' + 9004
        }
    }
    // example of another local server with changed port and without livereload
    // example: {
    //     options: {
    //         port: 9005,
    //         base: folderName,
    //         open: 'http://localhost:' + 9005,
    //         livereload: false,
    //         keepalive: true
    //     }
    // }
};
