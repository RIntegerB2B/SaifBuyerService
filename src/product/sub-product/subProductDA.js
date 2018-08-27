var Catalog = require('../../model/catalog.model');
var appSetting = require('../../config/appSetting');

exports.getProducts = function (req, res) {
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

exports.getProduct = function (req, res) {
   
    Catalog.findById(req.params.id, function (err, catalog) {
            if (err) {
                res.status(500).send({
                    "result": 0
                });
            } else {
                var product = catalog.products.id(req.params.productId)
                product.productImageName = appSetting.imageServerPath + product.productImageName;
                res.status(200).json(product)
            }
        });
    

}