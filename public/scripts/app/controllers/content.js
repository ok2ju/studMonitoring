'use strict';

angular.module('smAngular').controller('ContentCtrl', ['$scope', function($scope) {

	$scope.roles = ['admin', 'student', 'teacher'];
	$scope.selection = $scope.roles[0];

}]);