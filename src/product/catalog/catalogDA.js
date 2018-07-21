'use strict';
var Catalog = require('../../model/catalog.model');
var appSetting = require('../../config/appSetting');

exports.findCatalog = function (req, res) {
    Catalog.find({}).select().exec(function (err, createdCatalog) {
        if (err) {
            res.status(500).json({
                "result": 0
            })
        } else {
             var arraylength =createdCatalog.length-1;
            for (var i= 0; i<=arraylength; i++)
            {

            createdCatalog[i].catalogImageName = appSetting.imageServerPath  + createdCatalog[i].catalogImageName;
            
            }
            res.status(200).json(createdCatalog);
                      
          


       
        }
    })
}
