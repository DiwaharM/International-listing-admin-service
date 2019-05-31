var headerDA = require('./headerDA');
const multer = require('multer');
var appSetiing = require('../../config/appSettings');

exports.createHeader = function (req, res) {
    try {
        const PATH = appSetiing.headerUploadPath;
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                headerDA.createHeader(req, file, res);
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
exports.getImageForHeader = function (req, res) {
    try {
        headerDA.getImageForHeader(req, res);
    } catch (error) {
        console.log(error);
    }
}