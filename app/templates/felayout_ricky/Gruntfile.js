module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        data: {
            site: 'site',
            small: 'small',
            big: 'big',
            dev: 'dev',
            tmp: '.tmp',
            temp: 'temp',
            bc: 'dev/bower_components/',
            repo: '<%= sshLink %>'
        },
        jitGrunt: {
            staticMappings: {
                replace: 'grunt-text-replace',
                validation: 'grunt-html-validation',
                buildcontrol: 'grunt-build-control'
            }
        }
    });
    grunt.loadNpmTasks('assemble');
};
