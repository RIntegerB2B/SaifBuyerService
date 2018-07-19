'use strict';
var UserAccount = require('../../model/userAccount.model');


exports.signInToSite = function (req, res) {
    
    UserAccount.find({
        'userName': req.body.userName,
        'password': req.body.password
    }, function (err, userDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
            res.send(userDetail[0]._id);
        }
    });
  };