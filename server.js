// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MongoDB
let url = 'mongodb://localhost:27017/';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Settings

app.set('port',process.env.PORT || 3000);

// Routes
app.use('/api', require('./routes/api'));

// Start server
app.listen(app.get('port'),()=>{
    console.log('Listening on port 3000');
});

