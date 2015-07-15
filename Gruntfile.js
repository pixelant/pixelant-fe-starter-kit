module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
        data: {
            big: 'app/templates/big',
            // small: 'app/templates/small',
            // medium: 'app/templates/medium',
            // complex: 'app/templates/complex',
            // feWorkflow: 'app/templates/feWorkflow',
            // feWorkflowExt: 'app/templates/feWorkflowExt',
            felayout: 'app/templates/felayout_ricky'
        },
        jitGrunt: {
            staticMappings: {
                replace: 'grunt-text-replace',
                changelog: 'grunt-templated-changelog'
            }
        }
    });
    grunt.loadNpmTasks('grunt-text-replace');
};
