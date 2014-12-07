'use strict';

define(['./module'], function(module) {

	module.controller('TopMenuCtrl', ['$scope', function($scope) {

		$scope.account = {name: 'Alexey', surname: 'Vakulich', avatar: 'images/user4.jpg'};

	}]).directive('topMenu', function() {
		return {
			restrict: 'E', //// E - означает что директива предназначена для Element
			templateUrl: '/js/app/components/top-menu/view/top-menu.html',
			controller: 'TopMenuCtrl',
			link: function(scope, element, attrs) {
				//TODO ADD CLASS
			}
		};
	});

});

