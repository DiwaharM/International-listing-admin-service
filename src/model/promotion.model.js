
var mongoose = require('mongoose');

const PromotionSchema = new mongoose.Schema({
    promotionTitle: String,
    promotionPosition: Number,
    companyId: [mongoose.Schema.ObjectId]
});
const promotion = mongoose.model('promotion', PromotionSchema);
module.exports = promotion;