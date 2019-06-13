var supportDA = require('./supportDA');

exports.createSupport = function (req, res) {
    try {
        supportDA.createSupport(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getAllSuppot = function (req, res) {
    try {
        supportDA.getAllSuppot(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.updateSupport = function (req, res) {
    try {
        supportDA.updateSupport(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteSupport = function (req, res) {
    try {
        supportDA.deleteSupport(req, res);
    } catch (error) {
        console.log(error);
    }
}