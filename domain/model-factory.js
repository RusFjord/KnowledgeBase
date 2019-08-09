const models = new Map([
	['user_roles', require('./user_roles/model')],
	['tags', require('./tags/model')],
	['roles', require('./roles/model')]
	]
);

module.exports = models;
