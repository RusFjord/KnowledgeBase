const mongoose = require('mongoose');

const UserRoleScheme = new mongoose.Schema({
    user: ObjectId,
    role: ObjectId
});

const userRoleModel = mongoose.model('UserRole', UserRoleScheme);

module.exports = userRoleModel;
