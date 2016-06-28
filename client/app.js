angular.module('toggle_jobs', [])

/* turns $scope into a string, and angular takes arguments in dependency table to see if 
it exists.  If it finds it, then it brings it to you (dependency injection).  $scope angular 
provides out of box.  $scope = model, just like normal js object
*/

.controller('MainController', function($scope) {

  $scope.welcome = "Hello!";

})

