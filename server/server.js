var express = require('express');
var app = express();
var mongoose = require('mongoose');
var jobs_data = require('./jobs.json') ;

mongoose.connect('mongodb://localhost/jobs_data');

app.use(express.static(__dirname + '/../client'));

// app.get('/', function(req, res) {
//   res.send("Hello World");
// });

var Job = mongoose.model('Job', {
  title: String, 
  creationDate: Date,
  status: String,
  isApproved: Boolean,
  tags: Array 
});

//batch saved in Database - keeps saving everytime reloads

// Job.insertMany(jobs_data, function(err, docs) {
//   if(err) { return handleError(err); }

//   else {
//     console.log("data collected :", docs);
//   }
// });

// Start of Update Function:
app.put('/api/jobs/:id', function(req, res) {
  Job.findById({ _id: req.params.id}, function(err, doc) {
    if(doc.status === "inactive"){
      doc.status = "active";
      doc.save(function(err, newJob){
        res.json(newJob);
      });
    } else {
      doc.status = "inactive";
      doc.save(function(err, newJob){
        res.json(newJob);
      });
    }
  });
});

// WORKS IN POSTMAN
app.get('/api/jobs', function(req, res) {
  Job.find(function(err, jobs) {
    if(err)
      res.send(err)

    res.json(jobs);
  });
});

app.listen(3121, function() {
  console.log("App listening on port 3121");
});