'use strict';
var SuperCategory=require('../model/superCategory.model')

exports.findCategory = function (req, res) {
    SuperCategory.find({}).select().exec(function (err, superCat) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.status(200).json(superCat);
        }
    });
   
}