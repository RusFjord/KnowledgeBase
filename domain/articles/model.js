const mongoose = require('mongoose');

const ArticleScheme = new mongoose.Schema({
    creation_date_time: Date,
    modified_date_time: {type: Date, default: Date.now()},
    title: String,
    body: String,
    author: ObjectId,
    article_type: ObjectId,
    category: ObjectId
});

const articleModel = mongoose.model('Article', ArticleScheme);

module.exports = articleModel;
