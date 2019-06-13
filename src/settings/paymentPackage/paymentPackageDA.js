var paymentDetail = require('../../model/paymentPackage.model');

exports.createPayment = function (req, res) {
    paymentDetail.find({}).sort({
        duration: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (data.length <= 3) {
                var payment = new paymentDetail();
                payment.duration = req.body.duration;
                payment.amount = req.body.amount;
                payment.grade = req.body.grade;
                payment.month = req.body.month;
                payment.description = req.body.description;
                payment.save(function (err, payDetail) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(payDetail);
                    }
                })
            } else {
                res.status(200).json(data);
            }
        }
    })
}
exports.getAllPackage = function (req, res) {
    paymentDetail.find({}).sort({
        grade: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.updatePackage = function (req, res) {
    paymentDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (data.length !== 0) {
                data.duration = req.body.duration;
                data.amount = req.body.amount;
                data.month = req.body.month;
                data.description = req.body.description;
                data.grade = req.body.grade;
                data.save(function (err, packageDetail) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(packageDetail);
                    }
                })
            } else {
                res.status(200).json(data);
            }
        }
    })
}
exports.getSinglePackage = function (req, res) {
    paymentDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.deletePackage = function (req, res) {
    paymentDetail.findByIdAndRemove({
        '_id': req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            paymentDetail.find({}).sort({
                grade: 1
            }).exec(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(data);
                }
            })
        }
    })
}