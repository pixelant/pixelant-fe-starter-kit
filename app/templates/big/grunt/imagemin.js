module.exports = {
    site: {
        files: [{
            expand: true,
            cwd: '<%= tmp %>',
            src: ['images/{,*/}*.{png,jpg,gif,svg}'],
            dest: '<%= site %>'
        }]
    },
    small: {
        files: [{
            expand: true,
            cwd: '<%= tmp %>',
            src: ['images/{,*/}*.{png,jpg,gif,svg}'],
            dest: '<%= small %>'
        }]
    },
    big: {
        files: [{
            expand: true,
            cwd: '<%= tmp %>',
            src: ['images/{,*/}*.{png,jpg,gif,svg}'],
            dest: '<%= big %>'
        }]
    }
};
