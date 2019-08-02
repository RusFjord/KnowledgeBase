const express = require('express');

//routes
const index = require('./routes/index');
const err404 = require('./routes/err404');

const app = express();

app.use('/api_v_1_0', index);

app.use(err404);

app.listen(3000, () => {
	console.log('API server started');
});
