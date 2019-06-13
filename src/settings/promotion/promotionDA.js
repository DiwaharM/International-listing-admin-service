var promotionDetail = require('../../model/promotion.model');

exports.createPromotions = function (req, res) {
    var promotions = new promotionDetail();
    promotions.promotionTitle = req.body.promotionTitle;
    promotions.promotionPosition = req.body.promotionPosition;
    promotions.companyId = req.body.companyId;
    promotions.save(function (err, promotions) {
        if (err) {
            res.status(500).send({
                "message": 'promotions Not created'
            });
        } else {
            res.status(200).json(promotions);
        }
    });
}
exports.getPromotion = function (req, res) {
    promotionDetail.find({}).select().exec(function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(200).json(data);
        }
    })
}
exports.deletePromotion = function (req, res) {
    promotionDetail.findByIdAndRemove({
        '_id': req.params.id
    }, function (err, data) {
        if (err) {
            res.status(500).json(err);
        } else {
            promotionDetail.find({}).select().exec(function (err, data) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(data);
                }
            })
        }
    })
}