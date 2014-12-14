define(['../module'], function(module) {
  'use strict';

  module.controller('ScheduleFormCtrl', ['$scope', function($scope) {

    $scope.schedules = [{}];

    $scope.addOne = function() {
      $scope.schedules.push({});
    };

    }]).directive('scheduleForm', function() {
      return {
        restrict: 'E',
        templateUrl: '/js/app/components/schedule/form/view/schedule-form.html',
        controller: 'ScheduleFormCtrl'
      };
    });
});