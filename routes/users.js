const express = require('express');
const router = express.Router();
const Domain = require('../domain');
const domain = new Domain('users');

router.get('/', async (req, res) => {
	const answer = await domain.read({});
	res.send(answer)
});

router.get('/:id', async (req, res) => {
	const answer = await domain.read({_id: req.params.id});
	res.send(answer)
});

router.post('/', async (req, res) => {
	const answer = await domain.create(req.body);
	res.send(answer);
});

router.put('/:id', async (req, res) => {
	const answer = await domain.update(req.params.id, req.body);
	res.send(answer);
});

router.delete('/:id', async (req, res) => {
	const answer = await domain.delete(req.params.id);
	res.send(answer);
});

module.exports = router;
