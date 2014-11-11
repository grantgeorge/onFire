'use strict';

/**
 * @ngdoc function
 * @name onFireApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the onFireApp
 */
angular.module('onFireApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
