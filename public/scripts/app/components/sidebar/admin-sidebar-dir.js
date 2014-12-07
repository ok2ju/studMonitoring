'use strict';

angular.module('smAngular').directive('adminSidebar', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/admin-sidebar.html',
		controller: 'SidebarCtrl'
	};
});