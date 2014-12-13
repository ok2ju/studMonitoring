define([
  './module'
], function(module) {
  'use strict';

  module.controller('LoginCtrl', ['$scope', function($scope) {

    $scope.user = {
      username: '',
      password: ''
    };

    $scope.submit = function() {
      console.log($scope.user);
    };
  }]);
});

