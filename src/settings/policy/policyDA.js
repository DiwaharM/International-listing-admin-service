var PrivacyPolicy = require('../../model/policy.model');

exports.createPrivacyPolicy = function (req, res) {
    PrivacyPolicy.find({}).select().exec(function (err, policyData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var policy = new PrivacyPolicy(req.body);
            if (policyData.length === 0) {
                policy.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        PrivacyPolicy.find({}).select().exec(function (err, policyData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(policyData);
                            }
                        })
                    }
                })
            } else {
                policyData[0].policyHeading = req.body.policyHeading;
                policyData[0].policies = req.body.policies;
                policyData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        PrivacyPolicy.find({}).select().exec(function (err, policyData) {
                            if (err) {
                                res.status(500).send({
                                    "result": 'error occured while retreiving data'
                                })
                            } else {
                                res.status(200).json(policyData);
                            }
                        })
                    }
                })
            }
        }
    });
}
exports.getPrivacyPolicy = function (req, res) {
    PrivacyPolicy.find({}).select().exec(function (err, policyData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            res.status(200).json(policyData);
        }
    })
}
exports.updatePrivacyPolicy = function (req, res) {
    PrivacyPolicy.find({
        '_id': req.params.id,
    }, function (err, policyData) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            policyData[0].policyHeading = req.body.policyHeading;
            policyData[0].policies = req.body.policies;
            policyData[0].save(function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    PrivacyPolicy.find({}).select().exec(function (err, policyData) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while retreiving data'
                            })
                        } else {
                            res.status(200).json(policyData);
                        }
                    })
                }
            })
        }
    });
}
exports.deletePolicy = function (req, res) {
    PrivacyPolicy.findByIdAndRemove({
        '_id': req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            PrivacyPolicy.find({}).select().exec(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(data);
                }
            })
        }
    })
}