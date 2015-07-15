module.exports = {
    options: {
        limit: 16
    },
    devProcess: {
        tasks: [
            'copy:fonts',
            'copy:images',
            'copy:flags',
            'copy:toRoot',
            'assemble:allTemplates',
            'less:main',
            'less:bootstrap',
            'less:components',
            'less:local',
            'import:main',
            'import:jquery',
            'import:bootstrap',
            'import:components',
            'import:local'
        ],
    },
    big: {
        tasks: [
            'copy:big',
            'copy:faviconsMetaTagsBig',
            'imagemin:big'
        ]
    },
    site: {
        tasks: [
            'copy:site',
            'imagemin:site',
            'replace'
        ]
    }
};
