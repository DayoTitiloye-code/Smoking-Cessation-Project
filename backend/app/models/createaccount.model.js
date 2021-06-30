const mongoose = require('mongoose');

const CreateAccountSchema = mongoose.Schema({
    FirstName:String,
    LastName:String,
    Email:String,
    Password:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Accounts', CreateAccountSchema);