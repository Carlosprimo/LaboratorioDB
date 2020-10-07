// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb+srv://pruebaDB:1qwer5432@cluster0.uakml.mongodb.net/pruebaDB?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(3000);
console.log('Listening on port 3000...');
