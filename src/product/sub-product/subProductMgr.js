var subProductDA = require('../sub-product/subProductDA');

exports.getProduct = function (req, res) {
    try {
        subProductDA.getProduct(req, res)
    } catch (error) {
        console.log(error);
    }

}