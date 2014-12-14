/**
 * Created by alehatsman on 12/5/14.
 */

define(['./module'], function(module) {
  'use strict';

  module.factory('Klass', ['$resource',
    function($resource){
      return $resource('/api/klass/:id');
    }]);
});

