/**
 * Created by alehatsman on 12/4/14.
 */
'use strict';

angular.module('smAngular').controller('StudentProfileCtrl',
  ['$scope', '$routeParams','Students', function($scope, $routeParams, Students) {
    var studentId = $routeParams.studentId;

    Students.get({studentId:studentId}, function(student) {
      $scope.student = student;
    });

}]);