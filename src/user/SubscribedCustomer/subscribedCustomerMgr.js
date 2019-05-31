var subscribedDA = require('./subscribedCustomerDA');

exports.getAllCustomer = function (req, res) {
    try {
        subscribedDA.getAllCustomer(req, res);
    } catch (error) {
        console.log(error);
    }
}