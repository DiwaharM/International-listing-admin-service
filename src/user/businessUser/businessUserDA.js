var businessUserDetail = require('../../model/business-user-account.model');
var appSetting = require('../../config/appSettings');
var fs = require('fs');

exports.getAllBusinessUser = function (req, res) {
    businessUserDetail.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            for (let i = 0; i <= data.length - 1; i++) {
                data[i].logImageName = appSetting.businessUserServerPath + data[i]._id + '/' + 'logo' + '/' + data[i].logImageName;
                for (let j = 0; j <= data[i].companyImageName.length - 1; j++) {
                    data[i].companyImageName[j] = appSetting.businessUserServerPath + data[i]._id + '/' + 'companyImage' + '/' + data[i].companyImageName[j];
                }
            }
            res.status(200).json(data);
        }
    })
}
exports.getSelectedBusinessUser = function (req, res) {
    businessUserDetail.find({
        '_id': req.params.id
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            for (let i = 0; i <= data.length - 1; i++) {
                data[i].logImageName = appSetting.businessUserServerPath + data[i]._id + '/' + 'logo' + '/' + data[i].logImageName;
                for (let j = 0; j <= data[i].companyImageName.length - 1; j++) {
                    data[i].companyImageName[j] = appSetting.businessUserServerPath + data[i]._id + '/' + 'companyImage' + '/' + data[i].companyImageName[j];
                }
            }
            res.status(200).json(data);
        }
    })
}

exports.updateBusinessUserLogo = function (req, file, res) {
    businessUserDetail.find({
        '_id': req.params.id,
    }, function (err, data) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            data[0].logoImageName = file.originalname;
            data[0].save({}, function (err, footerData) {
                if (err) {
                    res.status(500).send({
                        message: 1
                    });
                } else {
                    businessUserDetail.find({}).select().exec(function (err, data) {
                        if (err) {
                            res.status(500).send({
                                "result": 'error occured while retreiving data'
                            })
                        } else {
                            res.status(200).json(data);
                        }
                    })
                }
            })
        }
    });
}

exports.getCurrentVistiorCount = function (req, res) {
    businessUserDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            var count = 0;
            if (data.customerLogs.length !== 0) {
                for (let i = 0; i <= data.customerLogs.length - 1; i++) {
                    if (data.customerLogs[i].date === req.body.date) {
                        count++;
                    }
                }
                res.status(200).json(count);
            } else {
                res.status(200).json(count);
            }
        }
    })
}


exports.getTotalVistiorCount = function (req, res) {
    businessUserDetail.findOne({
        '_id': req.params.id
    }).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            var count = 0;
            if (data.customerLogs.length !== 0) {
                count = data.customerLogs.length;
                res.status(200).json(count);
            } else {
                res.status(200).json(count);
            }
        }
    })
}

exports.deleteSingleCompanyImage = function(req, res) {
    businessUserDetail.findOne({'_id': req.params.id}).select().exec(function(err, data) {
        if(err) {
            res.status(500).json(err);
        } else {
            const PATH = appSetting.businessUserUploadPath + '/' + req.params.id + '/' + 'companyImage' + '/' + req.body.companyImageName;
            fs.unlink(PATH, (err) => {
                if(err) {
                    throw err;
                } else {
                    businessUserDetail.find({}).select().exec(function(err, data) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            for (let i = 0; i <= data.length - 1; i++) {
                                data[i].logImageName = appSetting.businessUserServerPath + data[i]._id + '/' + 'logo' + '/' + data[i].logImageName;
                                for (let j = 0; j <= data[i].companyImageName.length - 1; j++) {
                                    data[i].companyImageName[j] = appSetting.businessUserServerPath + data[i]._id + '/' + 'companyImage' + '/' + data[i].companyImageName[j];
                                }
                            }
                            res.status(200).json(data);
                        }
                    })
                }
            })
        }
    })
}