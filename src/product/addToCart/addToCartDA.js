'use strict';
var Cart = require('../../model/cart.model');


exports.createCart = function (req, res) {
  var productData = new Cart();
  productData.
  productData.save(
    function (err, productDetails) {
      if (err) { // if it contains error return 0
        res.status(500).send({
          "result": 0
        });
      } else {
        Cart.find({}).select().exec(function (err, cart) {
          if (err) {
            res.status(500).json({
              "result": 0
            })
          } else {

            res.status(200).json(cart);
          }
        })
      }
    });
}


exports.findCart = function (req, res) {
  Cart.find({}).select().exec(function (err, cart) {
    if (err) {
      res.status(500).json({
        "result": 0
      })
    } else {

      res.status(200).json(cart);
    }

  });
}