var registrationDetail = require('../../model/adminAccount.model');

exports.createAccount = function (req, res) {
    var createReg = new registrationDetail();
    createReg.userName = req.body.userName;
    createReg.password = req.body.password;
    createReg.save(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}