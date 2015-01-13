(function(){
  "use strict";

  angular.module('app', [
    'ui.router'
  ])

  .config(function($stateProvider, $urlRouterProvider, $locationProvider){
    
    // Set up routes
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
        templateUrl: 'app/login/signup.html',
        controller: 'SignupController'
      })
      .state('edit', {
        url: '/edit',
        templateUrl: 'app/edit/edit.html'
      })
      .state('view', {
        url: '/view',
        templateUrl: 'app/view/view.html'
      });

    $urlRouterProvider.otherwise('/');

    // Use the HTML5 History API, removing /#/
    $locationProvider.html5Mode(true);
  });

})();