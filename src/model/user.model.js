var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userType: Number,
    emailId: String,
    mobileNumber: Number,
    isApproved: Boolean
});

const User = mongoose.model('User', UserSchema);
module.exports = User;