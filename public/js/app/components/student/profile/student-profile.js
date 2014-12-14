/**
 * Created by alehatsman on 12/4/14.
 */

define(['../module'], function(module) {
  'use strict';

  module.controller('StudentProfileCtrl',
    ['$scope', '$routeParams','Students', function($scope, $routeParams, Students) {
      var studentId = $routeParams.id;

      Students.get({id:studentId}, function(student) {
        $scope.student = student;
      });

    }]).directive('studentProfile', function() {
      return {
        restrict: 'E',
        templateUrl: '/js/app/components/student/profile/view/student-profile.html',
        controller: 'StudentProfileCtrl'
      };
    });
});