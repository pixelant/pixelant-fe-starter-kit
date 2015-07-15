module.exports = {
    options: {
        commit: true,
        push: true,
        remote: '<%= repo %>',
        message: 'update'
    },
    site: {
        options: {
            dir: '<%= site %>',
            branch: 'site'
        }
    },
    big: {
        options: {
            dir: '<%= big %>',
            branch: 'big'
        }
    }
};
