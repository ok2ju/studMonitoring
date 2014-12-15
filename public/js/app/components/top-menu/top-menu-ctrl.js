'use strict';

define(['./module'], function(module) {

	module.controller('TopMenuCtrl', ['$scope', '$cookieStore', function($scope, $cookieStore) {

		var user = $cookieStore.get('user');

		$scope.account = {
			name: user.name,
			surname: user.surname,
			avatar: 'images/user4.jpg'
		};

	}]).directive('topMenu', function() {
		return {
			restrict: 'E', //// E - означает что директива предназначена для Element
			templateUrl: '/js/app/components/top-menu/view/top-menu.html',
			controller: 'TopMenuCtrl'
		};
	});

});