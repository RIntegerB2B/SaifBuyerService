'use strict';
var UserForgotPwd = require('../../model/userReqPwd.model');
var UserAccount = require('../../model/userAccount.model');
var User =  require ('../../model/user.model')

exports.pwdChangeRequest = function (req, res, someFormattedDate, randomKey) {
    // first Check email Id Matches
    User.find({
         'emailId': req.params.emailId
     }).exec(function (err, email) {
         if (err) {
             res.status(500).send({
                 "result": 0
             }); 
         } else {
             if(email.length > 0){
                 UserAccount.update({
                 'isActive': 0
             }, function (err) {
                 if (err) { 
                     res.status(500).send({
                         "result": 0
                     });
                 } else {
                    UserForgotPwd.update({
                         'isActive': 0
                     }, function (err) {
                         if (err) { 
                             res.status(500).send({
                                 "result": 0
                             });
                         } else {
                             // Do the insert operation 
                             var userForgotPwdData = new UserForgotPwd(req.body);
                             userForgotPwdData.Key = randomKey;
                             userForgotPwdData.ExpiryDate = new Date(someFormattedDate); 
                             userForgotPwdData.isActive = 1;
                             userForgotPwdData.save(
                                 function (err) {
                                     if (err) { 
                                         res.status(500).send({
                                             "result": 0
                                         });
                                     } else {
                                         res.status(200).send({
                                             "result": "mail send"
                                         });
                                     }
                                 });
                         }
                     });
                 }
             });
                }
             else{
                    res.status(200).send({
                        "result":2
                    })
              }
             
         }
     }) 
 
 }



 exports.pwdChangeReset = function (req, res) {
    UserForgotPwd.findOne({
        'Key': req.body.key
    }, function (err, adminForgotPwdData) {
        if (err) res.status(500).json(0); 
        else {
            var opts;
            UserAccount.update({}, {
                'password': req.body.newPassword
            }, opts, function (err) {
                if (err) { // if it contains error return 0
                    res.status(500).send({
                        message: "Some error occurred "
                    });
                } else {
                    res.status(200).json(1); // The update is success , return 1
                }
            });
        }
    });
}