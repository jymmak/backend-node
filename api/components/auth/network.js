const express = require('express');

const response = require('../../../network/response');
const Controller = require('./index');

const router = express.Router();

// Routes

router.post('/login', login);

// Internal functions
function login(req, res) {
	Controller.login(req.body.username, req.body.password)
		.then((token) => {
			response.success(req, res, token, 200);
		})
		.catch((err) => {
			response.error(req, res, 'Información inválida', 400);
		});
}

module.exports = router;
