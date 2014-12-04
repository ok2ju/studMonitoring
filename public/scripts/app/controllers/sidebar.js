/**
 * Created by alehatsman on 12/4/14.
 */
'use strict';

angular.module('smAngular').controller('SidebarCtrl', ['$scope', function($scope) {

  $scope.roles = ['admin', 'student', 'teacher'];
  $scope.selection = $scope.roles[0];

}]);