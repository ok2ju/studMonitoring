'use strict';

define([
  'angular',
  'angular-route',
  'angular-resource',
  './components/login/index',
  './components/student/index',
  './components/top-menu/index',
  './components/sidebar/index',
  './templates/student-table-page/index'
], function (angular) {
  return angular.module('smAngular', [
    'ngResource',
    'ngRoute',
    'smAngular.components.login',
    'smAngular.components.sidebar',
    'smAngular.components.top-menu',
    'smAngular.components.student',
    'smAngular.templates.student-table-page'
  ]);
});