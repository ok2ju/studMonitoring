/**
 * Created by alehatsman on 12/5/14.
 */
'use strict';

angular.module('smAngular').factory('Klass', ['$resource',
  function($resource){
    return $resource('/klass/:klassid');
  }]);