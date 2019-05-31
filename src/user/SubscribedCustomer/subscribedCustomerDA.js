var subscribedCus = require('../../model/subscribedCustomer.model');

exports.getAllCustomer = function (req, res) {
    subscribedCus.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}