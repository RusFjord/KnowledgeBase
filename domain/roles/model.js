const mongoose = require('mongoose');

const RoleScheme = new mongoose.Schema({
    name: String
});

const roleModel = mongoose.model('Role', RoleScheme);

module.exports = roleModel;
