var bannerDA = require('./bannerDA');
const multer = require('multer');
var appSetiing = require('../../config/appSettings');

exports.createBanners = function (req, res) {
    try {
        const PATH = appSetiing.bannerUploadPath;
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                bannerDA.createBanners(req, file, res);
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
                console.log(err);
                return res.status(501).json({
                    error: err
                });
            }
        });

    } catch (error) {
        console.log(error);
    }
}
exports.getBanners = function (req, res) {
    try {
        bannerDA.getBanners(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteBanners = function (req, res) {
    try {
        bannerDA.deleteBanners(req, res);
    } catch (error) {
        console.log(error);
    }
}