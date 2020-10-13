// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const exphbs = require('express-handlebars')
require('./database')
// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Settings
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.html',exphbs({
    defaultLayout: 'index',
    extname: 'html'
}));
app.set('views engine','.html');
// Routes
app.use('/', require('./routes/api'));

// Start server
app.listen(app.get('port'),()=>{
    console.log('Listening on port 3000');
});

