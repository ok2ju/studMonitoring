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
            title: "Profile",
            href: "/#/students/"+user.id
          },
          {
            title: "Schedule",
            href: "/#/schedule"
          }
        ]
      };
    } else if(user.role === 'admin') {
      $scope.menu1 = {
        links : [
          {
            title: "Add student",
            href: "/#/studentForm"
          },
          {
            title: "Add schedule",
            href: "/#/scheduleForm"
          },
          {
            title: "Edit schedule",
            href: "/#/"
          },
          {
            title: "Edit student",
            href: "/#/"
          },
          {
            title: "Edit teacher",
            href: "/#/"
          },
          {
            title: "Add marks",
            href: "/#/"
          },
          {
            title: "Add truancy",
            href: "/#/"
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

