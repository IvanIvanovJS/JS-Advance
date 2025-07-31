const history = require('connect-history-api-fallback');

module.exports = {
    server: {
        baseDir: './',
        routes: {
            '/node_modules': 'node_modules'
        },
        middleware: [history()]
    }
};
