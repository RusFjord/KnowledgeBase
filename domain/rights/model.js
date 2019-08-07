const mongoose = require('mongoose');

const RightsScheme = new mongoose.Schema({
	name: String
});

const rightModel = mongoose.model('Right', RightsScheme);

module.exports = rightModel;
