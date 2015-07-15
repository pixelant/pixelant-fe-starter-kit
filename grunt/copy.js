module.exports = {
    dist: {
    files: [{
        expand: true,
        dot: true,
        cwd: 'app/templates/',
        dest: 'app/templates/',
        src: [
            '{,*/}.gitignore'
        ],
        rename: function(dest, src) {
            return dest + src.replace('.gitignore', 'gitignore');
        }
    }]
}
};
