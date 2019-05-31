var settingRoute = require('./settings/settings.route');
var userRoute = require('./user/userRoute');
var categoryRoute = require('./category/categoryRoute');
var accountRoute = require('./account/accountRoute');

exports.loadRoutes = function (app) {
    settingRoute(app);
    userRoute(app);
    categoryRoute(app);
    accountRoute(app);
}