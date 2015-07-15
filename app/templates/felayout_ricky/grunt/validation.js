module.exports = {
    options: {
        reset: true,
        stoponerror: false,
        reportpath: false,
        relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.', 'Bad value name for attribute autocomplete on element input.', 'Bad value email for attribute autocomplete on element input.']
    },
    files: {
        src: ['<%= tmp %>/*.html']
    }
};
