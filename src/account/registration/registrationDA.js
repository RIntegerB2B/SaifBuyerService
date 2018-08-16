'use strict';
var User = require('../../model/user.model');
var UserAccount = require('../../model/userAccount.model');

exports.create = function (req, res) {
    // Do the save operation here
    var registration = new User(req.body);
    registration.name = req.body.name;
    registration.mobileNumber = req.body.mobileNumber;
    registration.location = req.body.location;
    registration.userType = req.body.userType; 
     // registration.isApproved = 1;TODO: This will be later controlled from Seller App
    
   registration.save(
        function (err, userData) {
            if (err) { // if it contains error return 0
                res.status(500).send({
                    "result": 0 // some exception happened
                });
            } else {
                var userAccount = new UserAccount();
                userAccount.userId = userData._id.toString();
                userAccount.name = req.body.name;
                userAccount.mobileNumber = req.body.mobileNumber;
                userAccount.location = req.body.location;
                userAccount.userType = req.body.userType;
         //         userAccount.isActive = 1
                userAccount.save(
                    function (err) {
                        if (err) { // if it contains error return 0
                            res.status(500).send({
                                "result": 0 // some exception happened
                            });
                        } else {
                            res.status(200).send({
                                "result": 1
                            });
                        }
                    }); 
            }
        }); 
};
