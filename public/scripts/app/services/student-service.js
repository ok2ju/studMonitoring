/**
 * Created by alehatsman on 12/4/14.
 */
'use strict';

angular.module('smAngular').factory('Students', ['$resource',
  function($resource){
    return $resource('/students/:studentId');
  }]);