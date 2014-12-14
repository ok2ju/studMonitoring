/**
 * Created by alehatsman on 12/14/14.
 */
define(['./module'], function(module) {
  'use strict';

  module.factory('Subjects', ['$resource', function($resource) {
    return $resource('/api/subjects/:id');
  }]);
});