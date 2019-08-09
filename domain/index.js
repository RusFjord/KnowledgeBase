const modelFactory = require('./model-factory');
const repository = require('./repository');

class Domain {

	constructor(modelTag) {
		this.model = modelFactory.get(modelTag);
	}
	async create(data) {
		return await repository.create(this.model, data);
	}

	async read(query) {
		return await repository.read(this.model, query);
	}

	async update(id, data) {
		return await repository.update(this.model, id, data);
	}

	async delete(id) {
		return await repository.delete(this.model, id);
	}
}

module.exports = Domain;
