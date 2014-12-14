define([
  './module'
], function(module) {
  'use strict';

  module.controller('LoginCtrl', ['$scope', '$rootScope', '$http', '$cookieStore',
    function($scope, $rootScope, $http, $cookieStore) {

    $scope.user = {
      username: '',
      password: ''
    };

    var changeLocation = function(url) {
      window.location = url;
    };

    $scope.submit = function() {
      var request = $http({
        method: 'POST',
        url: 'api/login',
        data: $scope.user
      }).success(function(data) {
        $cookieStore.put('user', data);
        if(data.role === 'student') {
          changeLocation('/#/students/' + data.id);
        } else if(data.role === 'teacher') {
          changeLocation('');
        } else if(data.role === 'admin') {
          changeLocation('/#/students');
        }
      });
    };
  }]);
});

