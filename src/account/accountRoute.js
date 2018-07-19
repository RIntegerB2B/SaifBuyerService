'use strict';
var signInMgr = require('./signIn/signInMgr');
var registrationMgr = require('./registration/registrationMgr');
var pwdChangeMgr = require('./pwdChange/pwdChangeMgr');

module.exports = function (app) {
   
    app.route('/user')
        .post(registrationMgr.create);

     app.route('/user/validate')
        .post(signInMgr.signInToSite);

 app.route('/pwdChange/:emailId')
        .get(pwdChangeMgr.pwdChangeRequest);

app.route('/pwdChange/reset')
        .post(pwdChangeMgr.pwdChangeReset);  
}


