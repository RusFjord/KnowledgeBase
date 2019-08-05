const users = require('../domain/users');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const answer = users.findAllUsers();
	answer.exec((err, users) => {
		 	if (err) {
		 		console.log(err);
		 		const error = {
		 			name: 'Ошибка запроса к базе данных',
					description: err
				};
		 		res.send(error);
		 	}

		 	res.send(users);
	});
});

router.post('/', (req, res) => {
	const user = {
		login: 'admin@site.com',
		pass: '',
		name: 'Администратор'
	};
	const userQuery = users.create(user);
	userQuery.then((err) => {
		if (err) {
			console.log(err);
			const error = {
				name: 'Ошибка запроса к базе данных',
				description: err
			};
			res.send(error);
		}
		res.send({result: 'success'});
	});
});

module.exports = router;
