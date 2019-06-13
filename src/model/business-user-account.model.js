var package = require('./package-details.model');
var customerLog = require('./customerLog.model');
var mongoose = require('mongoose');

const BusinessUserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    companyName: String,
    country: String,
    listingState: String,
    emailId: String,
    mobileNumber: String,
    password: String,
    listingCompanyName: String,
    listingCountry: String,
    listingEmailId: String,
    listingMobileNumber: String,
    weblink: String,
    category: String,
    subCategory: String,
    packageDetails: [package],
    logImageName: String,
    companyImageName: [String],
    customerLogs: [customerLog]
});
const BusinessAccount = mongoose.model('businessuseraccount', BusinessUserSchema);
module.exports = BusinessAccount;