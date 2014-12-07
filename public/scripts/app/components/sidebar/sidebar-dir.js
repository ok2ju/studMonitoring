/**
 * Created by alehatsman on 12/4/14.
 */
'use strict';

angular.module('smAngular').directive('sidebar', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/sidebar.html',
    controller: 'SidebarCtrl'
  };
});