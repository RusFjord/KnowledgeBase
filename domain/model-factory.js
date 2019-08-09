const models = new Map([
	['user_roles', require('./user_roles/model')],
	['tags', require('./tags/model')],
	['roles', require('./roles/model')],
	['categories', require('./categories/model')],
	['users', require('./users/model')]
	]
);

module.exports = models;
