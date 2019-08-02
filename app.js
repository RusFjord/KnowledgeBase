const express = require('express');

const app = express();

app.get('/api_v_1_0', (req, res) => {
	res.send('Hello API');
});

app.use((req, res, next) => {
	res.status(404).send('This functionality is missing. Refer to the documentation.');
});

app.listen(3000, () => {
	console.log('API server started');
});
