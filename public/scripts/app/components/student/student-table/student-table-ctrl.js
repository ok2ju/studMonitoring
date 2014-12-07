'use strict';

angular.module('smAngular').controller('StudentsTableCtrl', ['$scope', 'Students', function($scope, Students) {

	Students.query(function(students) {
		$scope.students = students;
	});

}]);