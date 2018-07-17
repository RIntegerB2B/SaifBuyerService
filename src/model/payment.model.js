var mongoose = require('mongoose');

const PaymentSchema  = new mongoose.Schema({
    transactionId: String,
    amount:Number
});

module.exports = PaymentSchema;