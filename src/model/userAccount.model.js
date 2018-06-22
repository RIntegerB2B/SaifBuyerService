var mongoose = require('mongoose');

const UserAccountSchema = new mongoose.Schema({
    userName: String,
    password: String,
    userId: String
});

const UserAccount = mongoose.model('userAccount', UserAccountSchema);
module.exports = UserAccount;