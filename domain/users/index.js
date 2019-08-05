const UserModel = require('./model');

module.exports = {
	findAllUsers: () => {
		return UserModel.find({}, null);
	},
	create: (user) => {
		const currentUser = new UserModel(user);
		return currentUser.save();
	}
};
