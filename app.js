const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  passport = require('passport'),
  mongoose = require('mongoose'),
  config = require('./config/database'),
  fs = require('fs');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

const app = express();

const users = require('./routes/users');

const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/users', users);

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Invalid End Point');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(port, function() {
  console.log('App listening on port ' + port);
});