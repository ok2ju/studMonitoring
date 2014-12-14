/**
 * Created by alehatsman on 12/4/14.
 */

define(['./module'], function(module) {
  'use strict';

  module.factory('Students', ['$resource', function($resource) {
      return $resource('/api/students/:id');
  }]);
});