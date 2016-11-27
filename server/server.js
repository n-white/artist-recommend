const app = require('express')();
const http = require('http');

const server = http.Server(app);
const middleware = require('./helpers/middleware');
const routers = require('./helpers/routes');

middleware(app);
routers(app);

module.exports = server;