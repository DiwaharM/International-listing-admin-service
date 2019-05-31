var promotionDA = require('./promotionDA');

exports.createPromotions = function (req, res) {
    try {
        promotionDA.createPromotions(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getPromotion = function (req, res) {
    try {
        promotionDA.getPromotion(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deletePromotion = function (req, res) {
    try {
        promotionDA.deletePromotion(req, res);
    } catch (error) {
        console.log(error);
    }
}