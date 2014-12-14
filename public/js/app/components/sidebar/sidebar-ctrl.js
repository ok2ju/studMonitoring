/**
 * Created by alehatsman on 12/4/14.
 */
'use strict';

define(['./module'], function(module) {
  module.controller('SidebarCtrl', [ '$scope', '$rootScope', '$cookieStore',
    function($scope, $rootScope, $cookieStore) {

  var user = $cookieStore.get('user');
  if(user.role) {
    if(user.role === 'student') {
      $scope.menu1 = {
        links : [
          {
            title: "Профайл",
            href: "/#/students/"+user.id
          }
        ]
      };
    }
  }

  }]).directive('sidebar', function() {
    return {
      restrict: 'E',
      templateUrl: '/js/app/components/sidebar/view/sidebar.html',
      controller: 'SidebarCtrl'
    };
  });
});

