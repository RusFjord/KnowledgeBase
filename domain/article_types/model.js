const mongoose = require('mongoose');

const ArticleTypeScheme = new mongoose.Schema({
    name: String
});

const articleTypeModel = mongoose.model('ArticleType', ArticleTypeScheme);

module.exports = articleTypeModel;
