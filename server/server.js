var express = require('express');
var app = express();

app.use(express.static('client'));

app.get('/', function(req, res) {
  res.send("Hello World");
});

app.listen(3121, function() {
  console.log("App listening on port 3121");
});