'use strict';

angular.module('smAngular').directive('studentsTable', function() {
	return {
		restrict: 'E', //// E - означает что директива предназначена для Element
		templateUrl: 'views/students-table.html',
		controller: 'StudentsTableCtrl'
	};
});