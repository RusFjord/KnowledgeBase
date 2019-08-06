const UserModel = require('./model');

module.exports = {
	create: async (user) => {
		const currentUser = new UserModel(user);
		return currentUser.save().then((err) => {
			if (err) {
				console.log(err);
				return {
					name: 'Ошибка запроса к базе данных',
					description: err
				};
			}
			return {result: 'success'};
		});
	},
	read: async (query) => {
		return UserModel.find(query, (err, users) => {
			if (err) {
				console.log(err);
				return {
					name: 'Ошибка запроса к базе данных',
					description: err
				};
			}
			return users;
		});

	},

	update: (id, user) => {
		return UserModel.findByIdAndUpdate( id, user,(err) => {
			if (err) {
				console.log(err);
				return {
					name: 'Ошибка запроса к базе данных',
					description: err
				};
			}
			return {result: 'success'};
		});

	},

	delete: (id) => {
		return UserModel.findByIdAndUpdate( id, user,(err) => {
			if (err) {
				console.log(err);
				return {
					name: 'Ошибка запроса к базе данных',
					description: err
				};
			}
			return {result: 'success'};
		});
	}
};
