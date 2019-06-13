var termDA = require('./termsanduseDA');

exports.createTerm = function (req, res) {
    try {
        termDA.createTerm(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getAllTerm = function (req, res) {
    try {
        termDA.getAllTerm(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.updateTerms = function (req, res) {
    try {
        termDA.updateTerms(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteTerms = function (req, res) {
    try {
        termDA.deleteTerms(req, res);
    } catch (error) {
        console.log(error);
    }
}