define(['../module'], function(module) {
  'use strict';

  module.controller('ScheduleTableCtrl',
    ['$scope', '$http', function($scope, $http) {

      var classId = 2;
      $http.get('/api/schedules/class/'+classId).success(function(list) {
        $scope.schedules = list;
      });

      $scope.isStartDay = function(index) {
        var yesterday = $scope.schedules[index - 1];
        var tommorow = $scope.schedules[index];

        var y = new Date(yesterday.week_day);
        var t = new Date(tommorow.week_day);
        return y.getDate() < t.getDate();
      };

      function count(list) {
        var count = {};
        list.forEach(function(ch) {
          var date = new Date(ch.week_day);

        });
      }

    }]).directive('scheduleTable', function() {
      return {
        restrict: 'E',
        templateUrl: '/js/app/components/schedule/table/view/schedule-table.html',
        controller: 'ScheduleTableCtrl'
      };
    });
});