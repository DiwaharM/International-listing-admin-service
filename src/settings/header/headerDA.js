var headerDetail = require('../../model/header.model');
var appSetting = require('../../config/appSettings');
var fs = require('fs');

exports.createHeader = function (req, file, res) {
    headerDetail.find({}).select().exec(function (err, headerData) {
        if (err) {
            res.status(500).send({
                "result": 'error occured while retreiving data'
            })
        } else {
            var header = new headerDetail();
            header.status = 0;
            header.logoImageName = file.originalname;
            if (headerData.length == 0) {

                header.save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        headerDetail.find({}).select().exec(function (err, header) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                header[0].logoImageName = appSetting.headerServerPath + header[0].logoImageName;
                                res.status(200).json(header);
                            }
                        });
                    }
                })

            } else {
                headerData[0].logoImageName = file.originalname;
                headerData[0].save(function (err, data) {
                    if (err) {
                        res.status(500).send({
                            "result": 'error occured while saving data'
                        })
                    } else {
                        headerDetail.find({}).select().exec(function (err, header) {
                            if (err) {
                                res.status(500).send({
                                    message: "Some error occurred while retrieving notes."
                                });
                            } else {
                                header[0].logoImageName = appSetting.headerServerPath + header[0].logoImageName;
                                res.status(200).json(header);
                            }
                        });
                    }
                })

            }
        }
    });
}

exports.getImageForHeader = function (req, res) {
    headerDetail.find({}).sort({
        position: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            for (let i = 0; i <= data.length - 1; i++) {
                data[i].logoImageName = appSetting.headerServerPath + data[i].logoImageName;
            }
            res.status(200).json(data);
        }
    })
}