/**
 * Created by alehatsman on 12/14/14.
 */

define(['./module'], function(module) {
  'use strict';

  module.factory('Teachers', ['$resource', function($resource) {
    return $resource('/api/teachers/:id');
  }]);
});