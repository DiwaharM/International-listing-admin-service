var contactDA = require('./contactDA');

exports.createContact = function (req, res) {
    try {
        contactDA.createContact(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getAllContact = function (req, res) {
    try {
        contactDA.getAllContact(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getSingleContact = function (req, res) {
    try {
        contactDA.getSingleContact(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.updateContact = function (req, res) {
    try {
        contactDA.updateContact(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteContact = function (req, res) {
    try {
        contactDA.deleteContact(req, res);
    } catch (error) {
        console.log(error);
    }
}