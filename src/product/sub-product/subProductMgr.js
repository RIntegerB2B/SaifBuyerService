var subProductDA = require('../sub-product/subProductDA');

exports.getProducts = function (req, res) {
    try {
        subProductDA.getProducts(req, res)
    } catch (error) {
        console.log(error);
    }

}

exports.getProduct = function (req, res) {
    try {
        subProductDA.getProduct(req, res)
    } catch (error) {
        console.log(error);
    }

}
