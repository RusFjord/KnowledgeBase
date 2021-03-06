const common = require('./repository-common');

module.exports = {
    create: async (Model, data) => {
        const current = new Model(data);
        return current.save().then((err) => {
            if (err) {
                common.error.data = err;
                return common.error;
            }
            return common.success;
        });
    },
    read: async (Model, query) => {
        return Model.find(query, (err, result) => {
            if (err) {
                common.error.data = err;
                return common.error;
            }
            return result;
        });
    },
    update: async (Model, id, data) => {
        return Model.findByIdAndUpdate( id, data,(err) => {
            if (err) {
                common.error.data = err;
                return common.error;
            }
            return common.success;
        });
    },
    delete: async (Model, id) => {
        return Model.findByIdAndDelete( id, (err) => {
            if (err) {
                common.error.data = err;
                return common.error;
            }
            return common.success;
        });
    }
};
