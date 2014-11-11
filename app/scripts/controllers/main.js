'use strict';

/**
 * @ngdoc function
 * @name onFireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the onFireApp
 */
angular.module('onFireApp')
  .controller('MainCtrl', function ($scope, $routeParams, $window) {

    $scope.imageHash = '1';

    if($routeParams.imageHash) $scope.imageHash = $routeParams.imageHash;

    $scope.goToNext = function() {
      var next = Math.floor((Math.random()*25)+1);
      if(next === parseInt($routeParams.imageHash)) next = next + 1;
      $window.location.href = '/#/' + next;
    };

  });
