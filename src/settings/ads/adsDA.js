var adsDetail = require('../../model/ads.model');
var appSetting = require('../../config/appSettings');
var fs = require('fs');

exports.createAdsImage = function (req, file, res) {
    adsDetail.find({}).select().exec(function (err, finddata) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (finddata.length === 0) {
                var ads = new adsDetail();
                ads.adsImageName = file.originalname;
                ads.position = req.params.position;
                ads.save(function (err, data) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data);
                    }
                })
            } else {
                finddata[0].adsImageName = file.originalname;
                finddata[0].position = req.params.position;
                finddata[0].save(function (err, data) {
                    if (err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json(data);
                    }
                })

            }
        }
    })

}
exports.getImageForAds = function (req, res) {
    adsDetail.find({}).sort({
        position: 1
    }).exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (data.length === 0) {
                res.status(200).json(data);
            } else {
                for (let i = 0; i <= data.length - 1; i++) {
                    data[i].adsImageName = appSetting.adsServerPath + data[i].adsImageName;
                }
                res.status(200).json(data);
            }
        }
    })
}

exports.deleteAds = function (req, res) {
    adsDetail.find({
        '_id': req.params.id
    }, function (err, adsDetails) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            if (adsDetails.length === 0) {
                res.status(200).json(adsDetails);
            } else {
                const PATH = appSetting.adsUploadPath + '/' + adsDetails[0].adsImageName;
                fs.unlink(PATH, (err) => {
                    if (err) {
                        throw err;
                    } else {
                        adsDetail.findByIdAndRemove(req.params.id, function (err) {
                            if (err) {
                                res.status(500).send({
                                    "result": 0
                                });
                            } else {
                                adsDetail.find({}).select().sort({
                                    position: 1
                                }).exec(function (err, adsImages) {
                                    if (err) {
                                        res.status(500).send({
                                            message: "Some error occurred while retrieving notes."
                                        });
                                    } else {
                                        if (adsImages.length === 0) {
                                            res.status(200).json(adsImages)
                                        } else {
                                            var adsLength = adsImages.length - 1;
                                            for (var i = 0; i <= adsLength; i++) {
                                                adsImages[i].adsImageName = appSetting.adsServerPath + adsImages[i].adsImageName;
                                            }
                                            res.status(200).json(adsImages);
                                        }

                                    }
                                });
                            }
                        });
                    }

                });
            }

        }
    });
}
