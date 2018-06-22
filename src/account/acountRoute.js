'use strict';
var signInMgr = require('./signIn/signInMgr');
var registrationMgr = require('./registration/registrationMgr');
module.exports = function (app) {
    /* 
    This is the call of the registration
    Post call in Postman - http://localhost:3002/user
        Below is the Json data u have to put in Postman Body
         {
            "firstName": "Prajwal",
            "lastName" : "Naik"
        } */
    app.route('/user')
        .post(registrationMgr.create);
}