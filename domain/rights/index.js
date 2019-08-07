const RightModel = require('./model');
const repository = require('../repository');

module.exports = {
	create: async (user) => {
		return await repository.create(RightModel, user);
	},
	read: async (query) => {
		return await repository.read(RightModel, query);
	},

	update: async (id, user) => {
		return await repository.update(RightModel, id, user);
	},

	delete: async (id) => {
		return await repository.delete(RightModel, id);
	}
};
