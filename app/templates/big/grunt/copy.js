module.exports = {
    site: {
        expand: true,
        dot: true,
        cwd: '<%= tmp %>',
        dest: '<%= site %>',
        src: [
            'main.js',
            'local.js',
            'main.css',
            '*.{ico,png,txt,xml}',
            'flags/{,*/}*.*',
            'fonts/{,*/}*.*'
        ]
    },
    big: {
        expand: true,
        dot: true,
        cwd: '<%= tmp %>',
        dest: '<%= big %>',
        src: [
            'main.js',
            'main.css',
            'copyToRoot/{,*/}*.*',
            '!copyToRoot/robots.txt',
            'fonts/{,*/}*.*',
            'flags/{,*/}*.*'
        ]
    },
    fonts: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= temp %>',
        src: [
            'fonts/{,*/}*.*'
        ]
    },
    images: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= temp %>',
        src: [
            'images/{,*/}*.*'
        ]
    },
    toRoot: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>/copyToRoot',
        dest: '<%= temp %>',
        src: [
            '{,*/}*.*'
        ]
    },
    flags: {
        expand: true,
        dot: true,
        cwd: '<%= bc %>/flag-icon-css/flags/4x3/',
        dest: '<%= temp %>/flags/4x3/',
        src: [
            'be.svg',
            'dk.svg',
            'ee.svg',
            'fl.svg',
            'fr.svg',
            'fi.svg',
            'de.svg',
            'it.svg',
            'nl.svg',
            'nz.svg',
            'no.svg',
            'pl.svg',
            'pt.svg',
            'es.svg',
            'se.svg',
            'ch.svg',
            'gb.svg',
            'us.svg'
        ]
    }
};
