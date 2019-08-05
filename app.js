const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

const config = require('./config');

mongoose.connect(config.db.path, {useNewUrlParser: true });


//routes
const index = require('./routes/index');
const users = require('./routes/users');
const err404 = require('./routes/err404');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/api_v_1_0', index);
app.use('/api_v_1_0/users', users);

app.use(err404);

app.listen(config.port, () => {
	console.log(config.info.SERVER_STARTED);
});
