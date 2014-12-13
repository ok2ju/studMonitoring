'use strict';

define([
  'angular',
  'angular-route',
  'angular-resource',
  './components/login/index',
  './components/student/index',
  './components/top-menu/index',
  './components/sidebar/index',
  './components/schedule/index',
  './templates/student-table-page/index',
  './templates/schedule-table-page/index'
], function (angular) {
  return angular.module('smAngular', [
    'ngResource',
    'ngRoute',
    'smAngular.components.login',
    'smAngular.components.sidebar',
    'smAngular.components.top-menu',
    'smAngular.components.student',
    'smAngular.components.schedule',
    'smAngular.templates.student-table-page',
    'smAngular.templates.schedule-table-page'
  ]);
});