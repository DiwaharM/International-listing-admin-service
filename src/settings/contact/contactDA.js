var contactDetail = require('../../model/contact.model');

exports.createContact = function (req, res) {
    contactDetail.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            var Contact = new contactDetail(req.body);
            if (data.length === 0) {
                Contact.save(function (err, data1) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data1);
                    }
                })
            } else {
                data[0].phoneNumber = req.body.phoneNumber;
                data[0].emailId = req.body.emailId;
                data[0].address = req.body.address;
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

exports.getAllContact = function (req, res) {
    contactDetail.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.updateContact = function (req, res) {
    contactDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            data.phoneNumber = req.body.phoneNumber;
            data.emailId = req.body.emailId;
            data.address = req.body.address;
            data.save(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    contactDetail.find({}).select().exec(function (err, data) {
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
exports.deleteContact = function (req, res) {
    contactDetail.findByIdAndRemove({
        '_id': req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            contactDetail.find({}).select().exec(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    contactDetail.find({}).select().exec(function (err, data) {
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