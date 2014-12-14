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
      when('/students/:id', {
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
      when('/schedule', {
        templateUrl: '/js/app/templates/schedule-table-page/view/schedule-table-page.html',
        controller: 'ScheduleTablePageCtrl'
      }).
      when('/scheduleForm', {
        templateUrl: '/js/app/templates/schedule-form-page/view/schedule-form-page.html'
      }).
      otherwise({
        redirectTo: '/students'
      });
  } ]);

});