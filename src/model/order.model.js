var mongoose = require('mongoose');
var Product = require('./product.model');
var User = require('./user.model');

const OrderSchema  = new mongoose.Schema({
    products: [Product],
    user: User
});

const Order = mongoose.model('order', OrderSchema);
module.exports = Order;