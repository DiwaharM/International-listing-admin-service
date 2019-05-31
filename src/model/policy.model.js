var PrivacyDetails = require('./privacyDetail.model');
var mongoose = require('mongoose');

const PolicySchema = new mongoose.Schema({
    policyHeading: String,
    policies: [PrivacyDetails]
});
const policy = mongoose.model('policy', PolicySchema);
module.exports = policy;