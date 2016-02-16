module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        // data: {},
        jitGrunt: {
            jitGrunt: true,
            staticMappings: {
                changelog: 'grunt-templated-changelog'
            }
        }
    });
    grunt.loadNpmTasks('grunt-text-replace');
};
