const mongoose = require('mongoose');

let url = 'mongodb://localhost:27017/';
mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));