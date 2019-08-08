const mongoose = require('mongoose');

const ArticleTagScheme = new mongoose.Schema({
    tag: ObjectId,
    article: ObjectId
});

const articleTagModel = mongoose.model('ArticleTag', ArticleTagScheme);

module.exports = articleTagModel;
