const mongoose = require('mongoose');
const rights = require('../rights_enum');

const UserScheme = new mongoose.Schema({
    login: { type: String, lowercase: true, trim: true},
    pass: String,
    name: String,
    right: { type: String, required: true, enum: rights.getAll() }
});

const userModel = mongoose.model('User', UserScheme);

module.exports = userModel;
