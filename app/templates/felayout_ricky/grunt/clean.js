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
    small: {
        files: [{
            dot: true,
            src: [
                '<%= small %>/*',
                '!<%= small %>/.git*'
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
    tmp: {
        files: [{
            dot: true,
            src: [
                '<%= tmp %>/*'
            ]
        }]
    },
    base: {
        files: [{
            dot: true,
            src: [
                'base/*'
            ]
        }]
    }
};
