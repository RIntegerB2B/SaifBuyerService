'use strict';
var UserAccount = require('../../model/userAccount.model');

/*
exports.signInSaveToSite = function (req, res) {
    var signin = new UserAccount(req.body);
    signin.userName = req.body.userName;
    signin.password = req.body.password;
    signin.userId = req.body.userId;        

    signin.save( function (err) {
            if (err) { // if it contains error return 0
                res.status(500).send({
                    message: "Some error occurred "
                });
            } else {
                res.json(1); // The update is success , return 1
            }
        });
        
}; */