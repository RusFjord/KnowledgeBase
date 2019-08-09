const mongoose = require('mongoose');

const ArticleTagScheme = new mongoose.Schema({
    tag: mongoose.Schema.ObjectId,
    article: mongoose.Schema.ObjectId
});

const articleTagModel = mongoose.model('ArticleTag', ArticleTagScheme);

module.exports = articleTagModel;
