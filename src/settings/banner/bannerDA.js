var bannersDetail = require('../../model/banner.model');
var appSetting = require('../../config/appSettings');
var fs = require('fs');

exports.createBanners = function (req, file, res) {
    bannersDetail.find({}).select().exec(function (err, finddata) {
        if (err) {
            res.status(500).json(err);
        } else {
            if (finddata.length === 0) {
                var banners = new bannersDetail();
                banners.bannerImage = file.originalname;
                banners.position = req.params.position;
                banners.save(function (err, ads) {
                    if (err) {
                        res.status(500).send({
                            "message": 'banners Not created'
                        });

                    } else {
                        res.status(200).json(ads);
                    }
                });
            } else {
                finddata[0].bannerImage = file.originalname;
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
exports.getBanners = function (req, res) {
    bannersDetail.find({}).select().sort({
        position: 1
    }).exec(function (err, bannerImages) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            if (bannerImages.length === 0) {
                res.status(200).json(bannerImages);
            } else {
                var bannerLength = bannerImages.length - 1;
                for (var i = 0; i <= bannerLength; i++) {
                    bannerImages[i].bannerImage = appSetting.bannerServerPath + bannerImages[i].bannerImage;
                }
                res.status(200).json(bannerImages);
            }
        }
    });
}
exports.deleteBanners = function (req, res) {
    bannersDetail.find({
        '_id': req.params.id
    }, function (err, bannerDetails) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            const PATH = appSetting.bannerUploadPath + '/' + bannerDetails[0].bannerImage;
            fs.unlink(PATH, (err) => {
                if (err) {
                    throw err;
                } else {
                    bannersDetail.findByIdAndRemove(req.params.id, function (err) {
                        if (err) {
                            res.status(500).send({
                                "result": 0
                            });
                        } else {
                            bannersDetail.find({}).select().sort({
                                position: 1
                            }).exec(function (err, bannerImages) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                    if (bannerImages.length === 0) {
                                        res.status(200).json(bannerImages);
                                    } else {
                                        var bannerLength = bannerImages.length - 1;
                                        for (var i = 0; i <= bannerLength; i++) {
                                            bannerImages[i].bannerImage = appSetting.bannerServerPath + bannerImages[i].bannerImage;
                                        }
                                        res.status(200).json(bannerImages);
                                    }

                                }
                            });
                        }
                    });
                }

            });
        }
    });
}
