var supportDetail = require('../../model/supports.model');

exports.createSupport = function (req, res) {
    supportDetail.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            var Supports = new supportDetail(req.body);
            if (data.length === 0) {
                Supports.save(function (err, data1) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data1);
                    }
                })
            } else {
                data[0].whatsappNumber = req.body.whatsappNumber;
                data[0].emailId = req.body.emailId;
                data[0].openTimings = req.body.openTimings;
                data[0].save(function (err, data2) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data2);
                    }
                })
            }
        }
    })
}

exports.getAllSuppot = function (req, res) {
    supportDetail.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.updateSupport = function (req, res) {
    supportDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            data.whatsappNumber = req.body.whatsappNumber;
            data.emailId = req.body.emailId;
            data.openTimings = req.body.openTimings;
            data.save(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    supportDetail.find({}).select().exec(function (err, data) {
                        if (err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json(data);
                        }
                    })
                }
            })
        }
    })
}
exports.deleteSupport = function (req, res) {
    supportDetail.findByIdAndRemove({
        '_id': req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            supportDetail.find({}).select().exec(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(data);
                }
            })
        }
    })
}