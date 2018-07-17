var mongoose = require('mongoose');
var Product = require('./product.model');
var User = require('./user.model');

const CartSchema  = new mongoose.Schema({
    products: [Product],
    user: User
});

const Cart = mongoose.model('cart', CartSchema);
module.exports = Cart;