(function() {
  'use strict';

  angular
    .module('app', ['ui.router']);
})
.value('apiUrl', 'http://localhost:3000')
  .config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        controller: 'HomeController as homeCtrl',
        templateUrl: 'app/home/home.html'
      });
  })();
