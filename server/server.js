var express = require('express');
var app = express();
var mongoose = require('mongoose');
var obj = require('./jobs.json') ;

console.log(obj);

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

// models.Job.create(jobs_data, function(err) {
//   if(err) { return handleError(err); }

//   else {
//     console.log("data collected");
//   }
// });

// app.get('/api/toggle/:id', function(req, res) {
//   Job.findByIdAndUpdate(id, function(err, job) {
//     if(err) {
//       console.log("Error");
//     } else {
//       if(job.status === "active") {
//         job.status = "inactive";
//       } else {
//         job.status = "active";
//       }
//     }
//   });
// });

app.listen(3121, function() {
  console.log("App listening on port 3121");
});