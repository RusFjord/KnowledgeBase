const users = require('../domain/users');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	const answer = await users.read({});
	res.send(answer)
});

router.get('/:id', async (req, res) => {
	const answer = await users.read({_id: req.params.id});
	res.send(answer)
});

router.post('/', async (req, res) => {
	const answer = await users.create(req.body);
	res.send(answer);
});

router.put('/:id', async (req, res) => {
	const answer = await users.update(req.params.id, req.body);
	res.send(answer);
});

router.delete('/:id', async (req, res) => {
	const answer = await users.delete(req.params.id);
	res.send(answer);
});

module.exports = router;
