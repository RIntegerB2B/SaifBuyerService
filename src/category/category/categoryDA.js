'use strict';
var SuperCategory = require('../../model/superCategory.model');

exports.showSuperCategory = function (req, res) {
  SuperCategory.find({}).select().exec(function (err, superCat) {
    if (err) {
      res.status(500).send({
        message: "Some error occurred while retrieving notes."
      });
    } else {
      res.json(superCat);
    }
  });
}
