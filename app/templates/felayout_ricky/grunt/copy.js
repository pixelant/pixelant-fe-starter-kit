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
    baseJs: {
        expand: true,
        dot: true,
        cwd: '<%= tmp %>',
        dest: 'base',
        src: [
            'main.js'
        ]
    },
    smallImg: {
        expand: true,
        dot: true,
        cwd: '<%= tmp %>',
        dest: '<%= small %>',
        src: [
            'fonts/{,*/}*.*',
            'flags/{,*/}*.*',
            'copyToRoot/{,*/}*.*',
            '!copyToRoot/robots.txt'
        ]
    },
    smallLess: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>/styles',
        dest: '<%= small %>',
        src: [
            'custom.less',
            'customVariables.less'
        ]
    },
    smallIconsLess: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>/styles/icons/',
        dest: '<%= small %>',
        src: [
            'icons.less'
        ]
    },
    smallJs: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>/js',
        dest: '<%= small %>',
        src: [
            'custom.js'
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
    tmp: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>',
        dest: '<%= tmp %>',
        src: [
            'fonts/{,*/}*.*',
            'copyToRoot/{,*/}*.*',
            'images/{,*/}*.*'
        ]
    },
    toRoot: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>/copyToRoot',
        dest: '<%= tmp %>',
        src: [
            '{,*/}*.*'
        ]
    },
    flags: {
        expand: true,
        dot: true,
        cwd: '<%= bc %>/flag-icon-css/flags/4x3/',
        dest: '<%= tmp %>/flags/4x3/',
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
    },
    bootstrap: {
        expand: true,
        dot: true,
        cwd: '<%= bc %>/bootstrap/less/',
        dest: 'base/bootstrap/',
        src: [
            '**/*'
        ]
    },
    faviconsMetaTagsSmall: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>/templates/parts',
        dest: '<%= small %>/partials',
        src: [
            'faviconsMetaTags.hbs'
        ]
    },
    faviconsMetaTagsBig: {
        expand: true,
        dot: true,
        cwd: '<%= dev %>/templates/parts',
        dest: '<%= big %>/partials',
        src: [
            'faviconsMetaTags.hbs'
        ]
    }
};
