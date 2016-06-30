angular.module('toggle_jobs', [])

.controller('MainController', function($scope, $http) {

  $scope.loadJobs = function () {
    $http.get('/api/jobs')
    .then(function(data) {
      $scope.jobs = data.data;
    }, function(data) {
        console.log("Error: " + data);
    });
  }
  
  $scope.changeStatus = function(id) {
    $http.put('/api/jobs/' + id)
      .then(function (data) {
        console.log(data);
        console.log($scope.jobs);
        $scope.loadJobs();
      })
  }
});
