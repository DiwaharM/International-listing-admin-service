var mongoose = require('mongoose');

const SubscribedCustomerSchema = new mongoose.Schema({
    firstName: String,
    mobileNumber: String,
    emailId: String
});
const subscribed = mongoose.model('usersubscribe', SubscribedCustomerSchema);
module.exports = subscribed;