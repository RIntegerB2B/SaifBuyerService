var settingRoutes = require('./settings/settingsRoute');

exports.loadRoutes = function (app) {
    settingRoutes(app);
};

