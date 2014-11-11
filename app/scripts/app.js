'use strict';

/**
 * @ngdoc overview
 * @name onFireApp
 * @description
 * # onFireApp
 *
 * Main module of the application.
 */
angular
  .module('onFireApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:imageHash', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/p/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/p/legal', {
        templateUrl: 'views/legal.html',
        controller: 'LegalCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
