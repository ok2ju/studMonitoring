/**
 * Created by alehatsman on 12/4/14.
 */

define(['../module', '../student-service'], function(module) {
  'use strict';

  module.controller('StudentProfileCtrl',
    ['$scope', '$routeParams','Students', function($scope, $routeParams, Students) {
      var studentId = $routeParams.studentId;

      Students.get({studentId:studentId}, function(student) {
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