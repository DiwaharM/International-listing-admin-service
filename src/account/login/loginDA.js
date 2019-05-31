var loginDetail = require('../../model/adminAccount.model');

exports.login = function (req, res) {
    loginDetail.find({
        'userName': req.body.userName,
        'password': req.body.password
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}