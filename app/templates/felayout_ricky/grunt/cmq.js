module.exports = {
    options: {
        log: true
    },
    tmp: {
        files: {
            '<%= tmp %>': ['<%= tmp %>/main.css']
        }
    }
};
