const express = require('express');

const server = express();

//GET, POST, PUT, DELETE

server.get('/', (req, res) => {
  return res.json({ message: `Helo ${req.query.name}` });
});

server.listen(3333);