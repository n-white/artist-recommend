const path = require('path');
const router = require('express').Router();
const mainRouter = require('../controllers/mainRouter');

module.exports = app => {
	app.use('/', mainRouter);

	// send all requests to index.html so browserHistory in React Router works
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  });
}