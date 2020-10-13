// Dependencies
var express = require('express');
var router = express.Router();

// Routes
router.get('/', (req,res) =>{
    res.render('layouts/index.html');
});
const connection = require('../database.js');

const init = async () => {
  const db = await connection(); // obtenemos la conexión
  await console.log( db.getCollection('Colombia_covid_dataset').find({}));
};

init();

// Return router
module.exports = router;
