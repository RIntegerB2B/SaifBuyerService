'use strict';
<<<<<<< HEAD

var productMgr = require('./productdetails/productMgr');
var addToCartMgr = require('./addToCart/addToCartMgr');

module.exports = function (app) {

  app.route('/product')
    .get(productMgr.getProduct);
  app.route('/cart')
    .post(addToCartMgr.createCart);
  app.route('/findcart')
    .post(addToCartMgr.findCart);
=======
var viewProductMgr  = require('./view-product/viewProductMgr');


module.exports = function(app) {
    app.route('/viewproduct/:subcategoryid')
    .get(viewProductMgr.viewProducts);

    app.route('/singleproduct/:productId')
    .get(viewProductMgr.viewSingleProducts);
   
>>>>>>> 24cbc973015796c16b72ff68b79f1159199a7fd4
}