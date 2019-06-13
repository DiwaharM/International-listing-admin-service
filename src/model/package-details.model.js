var mongoose = require('mongoose');

const PackageSchema = new mongoose.Schema({
    duration: String,
    amount: String,
    grade: String,
    month: String,
    startingDate: Date,
    closingDate: Date,
    active: Boolean
});
module.exports = PackageSchema;