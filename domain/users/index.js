const UserModel = require('./model');
const repository = require('../repository');

module.exports = {
	create: async (user) => {
		return await repository.create(UserModel, user);
	},
	read: async (query) => {
		return await repository.read(UserModel, query);
	},

	update: async (id, user) => {
		return await repository.update(UserModel, id, user);
	},

	delete: async (id) => {
		return await repository.delete(UserModel, id);
	}
};
