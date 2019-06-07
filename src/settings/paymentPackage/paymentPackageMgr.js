var paymentPackageDA = require('./paymentPackageDA');

exports.createPayment = function(req, res) {
    try {
       /*  var currentDate = new Date();
        var startDay = currentDate.getDate();
        var startMonth = currentDate.getMonth() + 1;
        var startYear = currentDate.getFullYear();
        var starting = startMonth + "/" + startDay + "/" + startYear;
        var lastDate = new Date();
        lastDate.setDate(currentDate.getDate() + req.body.duration);
        var closingDay = lastDate.getDate();
        var closingMonth = lastDate.getMonth() + 1;
        var closingYear = lastDate.getFullYear();
        var closing = closingMonth + "/" + closingDay + "/" + closingYear; */
        paymentPackageDA.createPayment(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getAllPackage = function(req, res) {
    try {
        paymentPackageDA.getAllPackage(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.updatePackage = function(req, res) {
    try {
        paymentPackageDA.updatePackage(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.getSinglePackage = function(req, res) {
    try {
        paymentPackageDA.getSinglePackage(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.deletePackage = function(req, res) {
    try {
        paymentPackageDA.deletePackage(req, res);
    } catch (error) {
        console.log(error);
    }
}