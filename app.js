const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  passport = require('passport'),
  mongoose = require('mongoose'),
  config = require('./config/database'),
  fs = require('fs');

// Connect to database
mongoose.connect(config.database, { useMongoClient: true });

// On connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

// On connection error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

const app = express()
const users = require('./routes/users');

const port = 3000;

// Bring in cors
app.use(cors());

// Static directory
app.use(express.static(path.join(__dirname, 'public')));

// Bodyparser
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users/', users);

// Index route
app.get('/', (req, res) => {
  res.send('Invalid End Point');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});