'use strict';
var User = require('../../model/user.model');
var UserAccount = require('../../model/userAccount.model');

exports.create = function (req, res) {
    // Do the save operation here
    var registration = new User(req.body);
    registration.firstName = req.body.firstName;
    registration.lastName = req.body.lastName;
    registration.userType = req.body.userType;
    registration.emailId = req.body.emailId;
    registration.mobileNumber = req.body.mobileNumber;
    registration.isApproved = 1; // TODO: This will be later controlled from Seller App
    
   registration.save(
        function (err, userData) {
            if (err) { // if it contains error return 0
                res.status(500).send({
                    "result": 0 // some exception happened
                });
            } else {
                var userAccount = new UserAccount();
                userAccount.userId = userData._id.toString();
                userAccount.userName = req.body.userName;
                userAccount.password = req.body.password
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
