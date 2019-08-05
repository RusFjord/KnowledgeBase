const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
    login: String,
    pass: String,
    name: String
});

const userModel = mongoose.model('User', UserScheme);

module.exports = userModel;
