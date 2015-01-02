(function(){
  "use strict";

  angular.module('app', [
    'ui.router'
  ])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/home/home.html',
        controller: 'HomeController'
      })
      .state('logout', {
        url: '/logout',
        templateUrl: 'app/login/logout.html'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/login/signup.html'
      });

    $urlRouterProvider.otherwise('/');
  });

})();