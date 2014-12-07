/**
 * Created by alehatsman on 12/7/14.
 */
define([
  'require',
  'angular',
  'app',
  'routes'
], function (require, ng) {
  'use strict';
  /*
   * place operations that need to initialize prior to app start here
   * using the `run` function on the top-level module
   */

  require(['domReady'], function (domReady) {
    domReady(function () {
      ng.bootstrap(document, ['smAngular']);
    });
  });
});