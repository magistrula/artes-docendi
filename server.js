var express = require('express'),
    app = express();

app.use(express.static('app'));

var server = app.listen(3000, function () {
  var host = server.address().address,
      port = server.address().port;
  console.log('Server listening at ' + host + ':' + port);
});