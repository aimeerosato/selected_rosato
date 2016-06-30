var express = require('express');
var app = express();
var mongoose = require('mongoose');
var jobs_data = require('./jobs.json') ;

/*
  Connect to database 
*/

mongoose.connect('mongodb://localhost/jobs_data');

/*
  Serve up static files
*/

app.use(express.static(__dirname + '/../client'));

/*
  Job model created and intantiated
*/

var Job = mongoose.model('Job', {
  title: String, 
  creationDate: String,
  status: String,
  isApproved: Boolean,
  tags: Array 
});

// This batch adds the jobs into the database, but will keep on adding 
// the same jobs upon a page refresh. 

Job.insertMany(jobs_data, function (err, docs) {
  if(err) { return handleError(err); }

  else {
    console.log("data collected: ", docs);
  }
});

/*
  API Routes that interact with mock data
*/

app.get('/api/jobs', function (req, res) {
  Job.find(function (err, jobs) {
    if(err) {
      res.send(err)
    }

    res.json(jobs);
  });
});

app.put('/api/jobs/:id', function (req, res) {
  Job.findById({ _id: req.params.id}, function (err, doc) {
    if(doc.status === "Inactive") {
      doc.status = "Active";
    } else {
      doc.status = "Inactive";  
    }
    doc.save(function (err, newJob) {
        res.json(newJob);
    });
  });
});

/*
  Express server on port 3121
*/

app.listen(3121, function() {
  console.log("App listening on port 3121");
});