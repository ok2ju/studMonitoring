define(['../module'], function(module) {
  'use strict';

  module.controller('ScheduleFormCtrl', ['$scope', 'Teachers', 'Subjects', 'Classrooms', 'Schedules',
    function($scope, Teachers, Subjects, Classrooms, Schedules) {

      var time = new Date();
      time.setHours(8);
      time.setMinutes(30);
      $scope.schedules = [{
        time: time,
        week_day: new Date()
      }];

      Teachers.query(function(list) {
        $scope.teachers = list;
      });

      Subjects.query(function(list) {
        $scope.subjects = list;
      });

      Classrooms.query(function(list) {
        $scope.klasses = list;
      });

      $scope.addOne = function() {
        var last = $scope.schedules[$scope.schedules.length-1];
        if(last.week_day && last.time) {
          $scope.schedules.push({
            week_day: new Date()
          });
          var size = $scope.schedules.length;
          $scope.schedules[size - 1].time = addMinutes($scope.schedules[size-2].time, 60);
          //$scope.schedules[size - 1 ].week_day = incrementDate($scope.schedules[size-2].week_day);
        }
      };

      $scope.sendSchedule = function() {
        $scope.schedules.forEach(function(sch) {
          Schedules.save(sch);
        });
      };

      /*function incrementDate(day) {
        var tomorrow = new Date();
        tomorrow.setDate(day.getDate() + 1);
        return tomorrow;
      }*/

      function addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes * 60000);
      }

      }]).directive('scheduleForm', function() {
        return {
          restrict: 'E',
          templateUrl: '/js/app/components/schedule/form/view/schedule-form.html',
          controller: 'ScheduleFormCtrl'
        };
      });
});