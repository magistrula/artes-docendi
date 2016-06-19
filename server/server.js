const express = require('express');
const app = express();
const router = require('./router');

app.use(express.static('app'));
app.use(router);

const server = app.listen(3000, function () {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Server listening at ' + host + ':' + port);
});