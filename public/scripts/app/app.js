'use strict';

angular.module('smAngular', ['ngResource', 'ngRoute']).config(['$routeProvider' ,function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/views/login.html',
      controller: 'LoginCtrl'
    }).
    when('/students', {
      templateUrl: '/views/content.html',
      controller: 'ContentCtrl'
    }).
    when('/students/:studentId', {
      templateUrl: '/views/student-profile.html',
      controller: 'StudentProfileCtrl'
    }).
    when('/studentForm', {
      templateUrl: '/views/student-form.html',
      controller: 'StudentFormCtrl'
    }).
    when('/admin', {
      templateUrl: '/views/admin.html',
      controller: 'AdminCtrl'
    }).
    when('/user', {
      templateUrl: '/views/user.html',
      controller: 'UserCtrl'
    }).
    otherwise({
      redirectTo: '/students'
    });
}]);