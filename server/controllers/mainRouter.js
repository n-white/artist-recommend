const mainRouter = require('express').Router();
const mainController = require('./mainController');

mainRouter.get('/', mainController.testRequest);

module.exports = mainRouter;