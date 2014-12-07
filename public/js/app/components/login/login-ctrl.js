define([
  './module'
], function(module) {
  'use strict';

  module.controller('LoginCtrl', ['$scope', function($scope) {
    $scope.submit = function() {
      console.log('submit');
    };
  }]);
});

