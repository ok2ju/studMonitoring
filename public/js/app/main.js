/**
 * Created by alehatsman on 12/7/14.
 */
require.config({

  //  псевдонимы и пути используемых библиотек и плагинов
  paths: {
    'domReady': '/node_modules/domready/ready.min',
    'angular': '/node_modules/angular/angular.min',
    'angular-route': '/node_modules/angular-route/angular-route.min',
    'angular-resource': '/node_modules/angular-resource/angular-resource.min',
    'angular-cookies': '/node_modules/angular-cookies/angular-cookies.min'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-route': {
      deps: ['angular']
    },
    'angular-resource': {
      deps: ['angular']
    },
    'angular-cookies': {
      deps: ['angular']
    }
  },

  deps: ['./bootstrap']
});