module.exports = {
    options: {
        limit: 10
    },
    tmp: {
        tasks: [
            'copy:tmp',
            'copy:flags',
            'copy:toRoot',
            'assemble:all',
            'less:dev',
            'less:bootstrap',
            'less:components',
            'import:js',
            'import:localJs'
        ],
    },
    big: {
        tasks: [
            'copy:big',
            'copy:faviconsMetaTagsBig',
            'imagemin:big'
        ]
    },
    small: {
        tasks: [
            'copy:smallImg',
            'copy:smallLess',
            'copy:smallIconsLess',
            'copy:smallJs',
            'copy:faviconsMetaTagsSmall',
            'imagemin:small'
        ]
    },
    site: {
        tasks: [
            'copy:site',
            'imagemin:site',
            'replace'
        ]
    },
    min: {
        tasks: [
            'cssmin:site',
            'uglify'
        ]
    }
};
