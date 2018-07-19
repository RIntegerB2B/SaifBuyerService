var signinDA = require('./signInDA');


 exports.signInToSite = function (req, res) {
    
  try {
    signinDA.signInToSite(req, res);
  } catch (error) {
      console.log(error);
  }
};