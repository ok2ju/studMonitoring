'use strict';

angular.module('smAngular').controller('AdminSidebarCtrl', ['$scope', function($scope) {

	$scope.menuItems1 = ['Add New Student', 'Add New Teacher', 'List Students', 'List Teachers',
	'Check your message1', 'Check your message2'];

	$scope.menuItems2 = ['Add New Schedule', 'Edit Schedule', 'Check your message1', 'Check your message2',
	'Check your message3', 'Check your message4'];

}]);