var paymentPackageDA = require('./paymentPackageDA');

exports.createPayment = function (req, res) {
    try {
        paymentPackageDA.createPayment(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getAllPackage = function (req, res) {
    try {
        paymentPackageDA.getAllPackage(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.updatePackage = function (req, res) {
    try {
        paymentPackageDA.updatePackage(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getSinglePackage = function (req, res) {
    try {
        paymentPackageDA.getSinglePackage(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deletePackage = function (req, res) {
    try {
        paymentPackageDA.deletePackage(req, res);
    } catch (error) {
        console.log(error);
    }
}