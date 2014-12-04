'use strict';

angular.module('smAngular').controller('StudentsTableCtrl', ['$scope', function($scope) {

	$scope.students = [{name: 'Pavel', surname: 'Pavlov', classChar: 'A', classNumber: 7, dateEnrollment: '01.01.2000', gender: 'M', login: 'pavlov_p'},
					   {name: 'Mikhail', surname: 'Petrov', classChar: 'Б', classNumber: 9, dateEnrollment: '01.01.1998', gender: 'M', login: 'petrov_m'}];

}]);