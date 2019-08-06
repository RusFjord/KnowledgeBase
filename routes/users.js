const users = require('../domain/users');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	const answer = await users.read({});
	res.send(answer)
});

router.post('/', (req, res) => {
	const answer = users.create(req.body);
	res.send(answer);
});

module.exports = router;
