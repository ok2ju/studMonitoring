/**
 * Created by alehatsman on 12/7/14.
 */
define(['./app'], function(app) {
  'use strict';
  return app.config([ '$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: '/js/app/components/login/view/login.html',
        controller: 'LoginCtrl'
      }).
      when('/students', {
        templateUrl: '/js/app/templates/student-table-page/view/student-table-page.html',
        controller: 'StudentTablePageCtrl'
      }).
      when('/students/:studentId', {
        templateUrl: '/js/app/templates/student-profile-page/view/student-profile-page.html'
      }).
      when('/studentForm', {
        templateUrl: '/js/app/components/student/form/view/student-form.html',
        controller: 'StudentFormCtrl'
      }).
      when('/admin', {
        templateUrl: '/views/student-table-page.html',
        controller: 'AdminCtrl'
      }).
      when('/user', {
        templateUrl: '/views/profile-page.html',
        controller: 'UserCtrl'
      }).
      otherwise({
        redirectTo: '/students'
      });
  } ]);

});