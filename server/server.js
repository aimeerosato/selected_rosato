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
  console.log("Here");
  Job.findById({ _id: req.params.id}, function(err, doc) {
    console.log(doc);

    if(doc.isApproved === false){
      res.json("shiiiit");
    }
    //res.json(doc);
  });
  // Job.findByIdAndUpdate(id, function(err, job) {
  //   if(err) {
  //     console.log("Error");
  //     res.send(err)
  //   } else {
  //     console.log("This is found job: ", job);
  //     if(job.status === "active") {
  //       job.status = "inactive";
  //     } else {
  //       job.status = "active";
  //     }
  //     res.json(job);
  //   }
  // });
  //res.json("here");
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