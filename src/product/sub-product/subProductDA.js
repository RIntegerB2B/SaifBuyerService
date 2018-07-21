var Catalog = require('../../model/catalog.model');
var appSetting = require('../../config/appSetting');

exports.getProduct = function(req,res){
    Catalog.findById(req.params.id).select('products').exec(function (err, product) {
        if (err) {
            res.status(500).json({
                "result": 0
            })
        } else {
           
           /*  var productDetails=product;
            if (productDetails)
            productDetails.productImageName = appSetting.imageServerPath +  productDetails.productImageName; */
            res.status(200).json(product)
            
        }
    })
}