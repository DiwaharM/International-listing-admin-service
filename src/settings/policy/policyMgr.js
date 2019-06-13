var privacyPolicyDA = require('./policyDA');

exports.createPrivacyPolicy = function (req, res) {
    try {
        privacyPolicyDA.createPrivacyPolicy(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getPrivacyPolicy = function (req, res) {
    try {
        privacyPolicyDA.getPrivacyPolicy(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.updatePrivacyPolicy = function (req, res) {
    try {
        privacyPolicyDA.updatePrivacyPolicy(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deletePolicy = function (req, res) {
    try {
        privacyPolicyDA.deletePolicy(req, res);
    } catch (error) {
        console.log(error);
    }
}
