var reviewDA = require('./reviewDA');

exports.getReview = function (req, res) {
    try {
        reviewDA.getReview(req, res);
    } catch (error) {
        console.log(error);
    }
}