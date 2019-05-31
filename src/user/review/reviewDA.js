var reviewDetail = require('../../model/review.model');

exports.getReview = function (req, res) {
    reviewDetail.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}