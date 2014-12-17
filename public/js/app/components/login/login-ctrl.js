define([
  './module'
], function(module) {
  'use strict';

  module.controller('LoginCtrl', ['$scope', '$rootScope', '$http', '$cookieStore',
    function($scope, $rootScope, $http, $cookieStore) {

      var user = getCurrentUser();
      if(user) {
        redirect(user);
      }

      $scope.user = {
        username: '',
        password: ''
      };

      function changeLocation(url) {
        window.location = url;
      };

      $scope.submit = function() {
        var request = $http({
          method: 'POST',
          url: 'api/login',
          data: $scope.user
        }).success(function(data) {
          $cookieStore.put('user', data);
          redirect(data);
        });
      };

      function getCurrentUser() {
        return $cookieStore.get("user");
      }

      function redirect(user) {
        if(user.role === 'student') {
          changeLocation('/#/students/' + user.id);
        } else if(user.role === 'teacher') {
          changeLocation('/#/students');
        } else if(user.role === 'admin') {
          changeLocation('/#/students');
        }
      }



  }]);
});

