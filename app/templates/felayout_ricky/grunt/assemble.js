module.exports = {
    options: {
        postprocess: require('pretty'),
        flatten: true,
        layout: 'BlankTemplate.hbs',
        layoutdir: '<%= dev %>/templates/layouts',
        helpers: '<%= dev %>/helpers/helper-*.js',
        partials: ['<%= dev %>/templates/parts/**/*.hbs']
    },
    all: {
        files: {
            '<%= tmp %>': ['<%= dev %>/templates/pages/**/*.hbs']
        },
    }
};
