var termDetail = require('../../model/termsanduse.model');

exports.createTerm = function (req, res) {
    termDetail.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            var terms = new termDetail(req.body);
            if (data.length === 0) {
                terms.save(function (err, data1) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data1);
                    }
                })
            } else {
                data[0].details = req.body.details;
                data[0].heading = req.body.heading;
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

exports.getAllTerm = function (req, res) {
    termDetail.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}

exports.updateTerms = function (req, res) {
    termDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            data.heading = req.body.heading;
            data.details = req.body.details;
            data.save(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    termDetail.find({}).select().exec(function (err, data) {
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
exports.deleteTerms = function (req, res) {
    termDetail.findByIdAndRemove({
        '_id': req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            termDetail.find({}).select().exec(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(data);
                }
            })
        }
    })
}