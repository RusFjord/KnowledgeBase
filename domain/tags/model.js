const mongoose = require('mongoose');

const TagScheme = new mongoose.Schema({
    name: String
});

const tagModel = mongoose.model('Tag', TagScheme);

module.exports = tagModel;
