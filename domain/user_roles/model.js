const mongoose = require('mongoose');

const UserRoleScheme = new mongoose.Schema({
    user: mongoose.Schema.ObjectId,
    role: mongoose.Schema.ObjectId
});

const userRoleModel = mongoose.model('UserRole', UserRoleScheme);

module.exports = userRoleModel;
