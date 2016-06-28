var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/../client'));

// app.get('/', function(req, res) {
//   res.send("Hello World");
// });

app.listen(3121, function() {
  console.log("App listening on port 3121");
});