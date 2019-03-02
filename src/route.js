var settingRoutes = require('./settings/settingsRoute');
var productRoutes = require('./product/productRoute');

exports.loadRoutes = function (app) {
    settingRoutes(app);
    productRoutes(app);
};

