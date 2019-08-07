const rights = require('../domain/rights');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	const answer = await rights.read({});
	res.send(answer)
});

router.get('/:id', async (req, res) => {
	const answer = await rights.read({_id: req.params.id});
	res.send(answer)
});

router.post('/', async (req, res) => {
	const answer = await rights.create(req.body);
	res.send(answer);
});

router.put('/:id', async (req, res) => {
	const answer = await rights.update(req.params.id, req.body);
	res.send(answer);
});

router.delete('/:id', async (req, res) => {
	const answer = await rights.delete(req.params.id);
	res.send(answer);
});

module.exports = router;
