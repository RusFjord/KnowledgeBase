const mongoose = require('mongoose');

const CategoryScheme = new mongoose.Schema({
    name: String
});

const categoryModel = mongoose.model('Category', CategoryScheme);

module.exports = categoryModel;
