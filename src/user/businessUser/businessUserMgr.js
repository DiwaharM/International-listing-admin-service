var businessUserDA = require('./businessUserDA');
var appSetting = require('../../config/appSettings');

exports.getAllBusinessUser = function (req, res) {
    try {
        businessUserDA.getAllBusinessUser(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getSelectedBusinessUser = function (req, res) {
    try {
        businessUserDA.getSelectedBusinessUser(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.updateBusinessUserLogo = function (req, res) {
    try {
        const PATH = appSetting.businessUserServerPath;
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                businessUserDA.updateBusinessUserLogo(req, file, res);
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
exports.getCurrentVistiorCount = function (req, res) {
    try {
        businessUserDA.getCurrentVistiorCount(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getTotalVistiorCount = function (req, res) {
    try {
        businessUserDA.getTotalVistiorCount(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteSingleCompanyImage = function (req, res) {
    try {
        businessUserDA.deleteSingleCompanyImage(req, res);
    } catch (error) {
        console.log(error);
    }
}