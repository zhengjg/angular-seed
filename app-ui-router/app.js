'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.otherwise({redirectTo: '/index.html'});
  $locationProvider.html5Mode(true);
}]);
