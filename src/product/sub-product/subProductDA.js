var Catalog = require('../../model/catalog.model');
var appSetting = require('../../config/appSetting');

exports.getProduct = function (req, res) {
    Catalog.findById(req.params.id).select('products').exec(function (err, product) {
        if (err) {
            res.status(500).json({
                "result": 0
            })
        } else {

            var arraylength = product.products.length - 1;
            for (var i = 0; i <= arraylength; i++) {
                product.products[i].productImageName = appSetting.imageServerPath + product.products[i].productImageName;
            }
            res.status(200).json(product);
        }
    })


}