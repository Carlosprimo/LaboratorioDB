const router = require('express').Router();
const Person = require('../models/Person');

router.route('/').get((req, res) => {
   Person.find({nombre_depa: 'Antioquia'})
		.then((persons) => res.json(persons))
		.catch((error) => res.status(400).json('Error: ' + error));
});

router.route('/add').post((req, res) => {
   const person = req.body.person
   const newPerson = new Person({ person })
   newPerson.save()
      .then(() => res.json('Person added!'))
      .catch(error => res.status(400).json('Error: '+ error))
})

module.exports = router;
