var AdsDA = require('./adsDA');
const multer = require('multer');
var appSetiing = require('../../config/appSettings');

exports.createAdsImage = function (req, res) {
    try {
        const PATH = appSetiing.adsUploadPath;
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                AdsDA.createAdsImage(req, file, res);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });
        let upload = multer({
            storage: storage
        }).array('uploads[]', 20); //only 20 images can be uploaded
        upload(req, res, function (err) {
            if (err) {
                return res.status(501).json({
                    error: err
                });
            }
        });

    } catch (error) {
        console.log(error);
    }
}

exports.getImageForAds = function (req, res) {
    try {
        AdsDA.getImageForAds(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteAds = function (req, res) {
    try {
        AdsDA.deleteAds(req, res);
    } catch (error) {
        console.log(error);
    }
}