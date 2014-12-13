define(['../module'], function(module) {
  'use strict';

  module.controller('ScheduleTableCtrl',
    ['$scope', function($scope) {

    }]).directive('scheduleTable', function() {
      return {
        restrict: 'E',
        templateUrl: '/js/app/components/schedule/table/view/schedule-table.html',
        controller: 'ScheduleTableCtrl'
      };
    });
});