const models = new Map([
	['user_roles', require('./user_roles/model')],
	['tags', require('./tags/model')]
	]
);

module.exports = models;
