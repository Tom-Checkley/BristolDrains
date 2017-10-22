const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const public = require('./routes/public')(router);
const authentication = require('./routes/authentication')(router);
const admin = require('./routes/admin')(router);
const bodyParser = require('body-parser');
const cors = require('cors');

// Databasee Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useMongoClient: true }, (err) => {
  if (err) {
    console.log('Could NOT connect to database: ' + err);
  } else {
    console.log('Connected to database: ' + config.db);
  }
});

// Set Application Port Number
const port = 8080;

// 
// MIDDLEWARE
///////////////////////////////////////////////////

// cors
app.use(cors({
  origin: 'http://localhost:4200'
}));
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json 
app.use(bodyParser.json());
// Set static directory for frontend
app.use(express.static(__dirname + '/dist/public'));

// Pull in public routes
app.use('/public', public);
// Pull in authentication routes
app.use('/authentication', authentication);
// Pull in blog routes
app.use('/admin', admin);



// 
// SET BASE ROUTE
///////////////////////////////////////////////////
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/public/index.html'));
});

app.listen(port, () => {
  console.log('App listening on port ' + port);
});