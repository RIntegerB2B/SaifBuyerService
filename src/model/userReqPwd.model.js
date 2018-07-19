var mongoose = require('mongoose');

const UserForgotPwdSchema  = new mongoose.Schema({
    Key: String,
    ExpiryDate: Date,
    isActive: Boolean
});

const UserForgotPwd = mongoose.model('userForgotPwd', UserForgotPwdSchema);
module.exports = UserForgotPwd;