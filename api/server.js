const express = require('express');
const server = express();
const routes = require('./routes');

server.use(express.json());

server.use('/api', routes);

server.get('/', (req, res) => {
  res.status(200).send('Server is running');
});

module.exports = server;