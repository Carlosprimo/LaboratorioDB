const router = require('express').Router();
const Depart = require('../models/Depart');

router.route('/').get((req, res) => {
	Depart.find({ name: 'Antioquia' })
		.then((depart) => {
			res.json(depart);
		})
		.catch((error) => console.error(error));
});

module.exports = router;
