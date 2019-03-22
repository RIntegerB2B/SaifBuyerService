var mongoose = require('mongoose');

const CartSchema  = new mongoose.Schema({
    productTitle: String,
    productName: String,
    productDescription: String,
    shortDescription: String, 
    price: Number,
    color: String, 
    styleCode: String, 
    skuCode: String, 
    productImageName: [String],
    mainCategory: [String]
});


const Cart = mongoose.model('cart', CartSchema);
module.exports = Cart;