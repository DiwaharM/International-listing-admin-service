var mongoose = require('mongoose');

const TermsSchema = new mongoose.Schema({
        details: String,
        heading: String,
        detailsUpdate: Boolean
});
const Terms = mongoose.model('termsanduse', TermsSchema);
module.exports = Terms;