'use strict';

angular.module('smAngular').directive('studentProfile', function() {
	return {
		restrict: 'A',
		templateUrl: 'views/student-profile.html',
		controller: 'StudentProfileCtrl'
	};
});