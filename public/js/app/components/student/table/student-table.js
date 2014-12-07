define(['../module', '../student-service'], function(module) {
	'use strict';

	module.controller('StudentsTableCtrl', [ '$scope', 'Students', function($scope, Students) {

		Students.query(function(students) {
			$scope.students = students;
		});

	} ]).directive('studentsTable', function() {
		return {
			restrict: 'E', //// E - означает что директива предназначена для Element
			templateUrl: '/js/app/components/student/table/view/students-table.html',
			controller: 'StudentsTableCtrl'
		};
	});

});