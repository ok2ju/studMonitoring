'use strict';

angular.module('smAngular').directive('studentSidebar', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/student-sidebar.html',
		controller: 'StudentSidebarCtrl'
	}
});