module.exports = {
    site: {
        files: [{
            dot: true,
            src: [
                '<%= site %>/*',
                '!<%= site %>/.git*'
            ]
        }]
    },
    big: {
        files: [{
            dot: true,
            src: [
                '<%= big %>/*',
                '!<%= big %>/.git*'
            ]
        }]
    },
    tempFolder: {
        files: [{
            dot: true,
            src: [
                '<%= temp %>/*'
            ]
        }]
    }
};
