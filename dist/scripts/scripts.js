"use strict";angular.module("onFireApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/:imageHash",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/p/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/p/legal",{templateUrl:"views/legal.html",controller:"LegalCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("onFireApp").controller("MainCtrl",["$scope","$routeParams","$window",function(a,b,c){a.imageHash="1",b.imageHash&&(a.imageHash=b.imageHash),a.goToNext=function(){var a=Math.floor(25*Math.random()+1);a===parseInt(b.imageHash)&&(a+=1),c.location.href="/#/"+a}}]),angular.module("onFireApp").controller("AboutCtrl",["$scope",function(){}]),angular.module("onFireApp").controller("LegalCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);