const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Setting epxress App
const app = express();

// Log requests to the console
app.use(logger('dev'));

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Require our routes into the application.
require('./server/routes')(app);
// Default catch all route send Welcome message as response
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome'
}))

module.exports = app;
