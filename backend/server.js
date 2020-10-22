const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('Mongo database connected successfully');
});

const personsRouter = require('./routes/persons');

app.use('/persons', personsRouter);

app.listen(port, () => {
	console.log(`Server running in port ${port}`);
});
