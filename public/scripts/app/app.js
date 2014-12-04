'use strict';

angular.module('smAngular', ['ngResource', 'ngRoute']).config(['$routeProvider' ,function($routeProvider) {
  $routeProvider.
    when('/students', {
      templateUrl: '/views/content.html',
      controller: 'ContentCtrl'
    }).
    when('/students/:studentId', {
      templateUrl: '/views/student-profile.html',
      controller: 'StudentProfileCtrl'
    }).
    otherwise({
      redirectTo: '/phones'
    });
}]);