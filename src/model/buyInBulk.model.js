var mongoose = require('mongoose');

const BuyInBulkSchema = new mongoose.Schema({
    mobileNumber: Number,
    emailId: String,
    city: String,
    fullName: String,
    products: String,
    date: Date
});
const BuyInBulk = mongoose.model('buyinbulk', BuyInBulkSchema);
module.exports = BuyInBulk;

