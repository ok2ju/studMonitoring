'use strict';

angular.module('smAngular').directive('topMenu', function() {
  return {
    restrict: 'E', //// E - означает что директива предназначена для Element
    templateUrl: 'views/top-menu.html',
    controller: 'TopMenuCtrl',
    link: function (scope, element, attrs) {
      //TODO ADD CLASS
    }
  };
});