const express = require('express');
const app = express();
const router = require('./router');

app.use(express.static('app'));
app.use(router);

const port = process.env.PORT || 5000;

const server = app.listen(port, function () {
  const host = server.address().address;
  console.log('Server listening at ' + host + ':' + port);
});