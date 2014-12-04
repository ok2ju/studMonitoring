'use strict';

angular.module('smAngular').directive('content', function() {
	return {
		restrict: 'A',
		templateUrl: 'views/content.html',
		controller: 'ContentCtrl'
	}
});