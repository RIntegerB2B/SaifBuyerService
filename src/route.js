var settingRoutes = require('./settings/settingsRoute');
<<<<<<< HEAD
var productRoute = require('./product/productRoute');
var category = require('./category/categoryRoute');
exports.loadRoutes = function (app) {
    settingRoutes(app);
    productRoute(app);
    category(app);
=======
<<<<<<< HEAD
var productRoutes = require('./product/productRoute');

exports.loadRoutes = function (app) {
    settingRoutes(app);
    productRoutes(app);
=======

exports.loadRoutes = function (app) {
    settingRoutes(app);
>>>>>>> 4c405fd701f40c51e8ce14fa2932ee733b99aa4d
>>>>>>> 24cbc973015796c16b72ff68b79f1159199a7fd4
};

