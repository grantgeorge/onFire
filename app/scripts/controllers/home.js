'use strict';

/**
 * @ngdoc function
 * @name onFireApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the onFireApp
 */
angular.module('onFireApp')
  .controller('HomeCtrl', function ($scope, $routeParams, $window) {

    if(!$routeParams.imageHash) $window.location.href = '/#/1';

    $scope.imageHash = $routeParams.imageHash;

    $scope.goToNext = function() {
      console.log('goToNext');
      var next = Math.floor((Math.random()*10)+1);
      console.log(next);
      $window.location.href = '/#/home/' + next;
    };

  });
