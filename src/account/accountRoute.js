var loginMgr = require('./login/loginMgr');
var regMgr = require('./Registration/registrationMgr');

module.exports = function (app) {
    app.route('/login').post(loginMgr.login);
    app.route('/registration').post(regMgr.createAccount);
}