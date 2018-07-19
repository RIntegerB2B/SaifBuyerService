var mongoose = require('mongoose');

const UserAccountSchema = new mongoose.Schema({
    userName: String,
    password: String,
    userId: String,
    isActive: Boolean
});

const UserAccount = mongoose.model('userAccount', UserAccountSchema);
module.exports = UserAccount;