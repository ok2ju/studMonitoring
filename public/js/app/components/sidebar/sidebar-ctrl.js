/**
 * Created by alehatsman on 12/4/14.
 */
'use strict';

define(['./module'], function(module) {
  module.controller('SidebarCtrl', [ '$scope', function($scope) {

    //$scope.roles = ['admin', 'student', 'teacher'];
    //$scope.selection = $scope.roles[0];

  }]).directive('sidebar', function() {
    return {
      restrict: 'E',
      templateUrl: '/js/app/components/sidebar/view/sidebar.html',
      controller: 'SidebarCtrl'
    };
  });
});

