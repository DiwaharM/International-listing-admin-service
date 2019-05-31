var regDA = require('./registrationDA');

exports.createAccount = function (req, res) {
    try {
        regDA.createAccount(req, res);
    } catch (error) {
        console.log(error);
    }
}
