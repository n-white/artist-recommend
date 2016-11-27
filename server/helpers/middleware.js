const path = require('path');
const morgan = require('morgan');
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const parser = require('body-parser');

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(express.static(path.join(__dirname, '/../../client')));
  app.use(parser('dev'));
};
