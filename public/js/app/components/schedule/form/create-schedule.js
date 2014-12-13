define(['../module'], function(module) {
  'use strict';

  module.controller('CreateScheduleCtrl',
    ['$scope', function($scope) {

    }]).directive('createSchedule', function() {
      return {
        restrict: 'E',
        templateUrl: '/js/app/components/schedule/form/view/create-schedule.html',
        controller: 'CreateScheduleCtrl'
      };
    });
});