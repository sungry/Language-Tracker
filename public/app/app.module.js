(function(){
  "use strict";

  angular.module('app', [
    'ui.router'
  ])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/app/home/home.html',
        controller: 'HomeController'
      });

    $urlRouterProvider.otherwise('/');
  });

})();