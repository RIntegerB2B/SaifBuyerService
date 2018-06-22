var accountRoutes = require('./account/acountRoute');

exports.loadRoutes = function (app) {
    accountRoutes(app);
};

