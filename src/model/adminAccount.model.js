var mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    userName: String,
    password: String
});
const Loign = mongoose.model('adminaccount', LoginSchema);
module.exports = Loign;