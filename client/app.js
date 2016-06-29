angular.module('toggle_jobs', [])

/* turns $scope into a string, and angular takes arguments in dependency table to see if 
it exists.  If it finds it, then it brings it to you (dependency injection).  $scope angular 
provides out of box.  $scope = model, just like normal js object
*/
// .config(function($routeProvider) {
//   .when('/', {
//     controller: 'ToggleController',
//     templateUrl: 'index.html'
//   });
// })

.controller('MainController', function($scope, $http) {

  $scope.welcome = "Hello!";

  $http.get('/api/jobs')
    .success(function(data) {
      $scope.jobs = data;
      console.log(data);
    })
    .error(function(data) {
        console.log("Error: " + data);
    });
})

// .controller('TableController', function(NgTableParams, $resource){
//   var Api = $resource("/data");
//   this.tableParams = new NgTableParams({}, {
//     getData: function(params) {
//       return Api.get(params.url()).
//     }
//   })
// })