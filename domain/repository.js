const error = {
    description: "Database error",
    data: null
};

module.exports = {
    create: async (Model, data) => {
        const current = new Model(data);
        return current.save((err) => {
            if (err) {
                error.data = err;
                return error;
            }
        });
    },
    read: async (Model, query) => {
        return Model.find(query, (err, result) => {
            if (err) {
                error.data = err;
                return error;
            }
            return result;
        });
    },
    update: async (Model, id, data) => {
        return Model.findByIdAndUpdate( id, data,(err) => {
            if (err) {
                error.data = err;
                return error;
            }
        });
    },
    delete: async (Model, id) => {
        return Model.findByIdAndDelete( id, (err) => {
            if (err) {
                error.data = err;
                return error;
            }
        });
    }
};
