(function(){
  "use strict";

  angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/app/home/home.html',
        controller: 'HomeCtrl'
      })
      .state('logout', {
        url: '/logout',
        controller: 'LogoutCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/login/signup.html',
        controller: 'SignupCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('add', {
        url: '/add',
        templateUrl: 'app/add/add.html'
      })
      .state('notes', {
        url: '/notes',
        templateUrl: 'app/notes/notes.html',
        controller: 'NotesCtrl'
      });

    $urlRouterProvider.otherwise('/');

    $httpProvider.interceptors.push('AuthInterceptor');

    // Use the HTML5 History API, removing /#/
    $locationProvider.html5Mode(true);
  })

  // Add constant for use elsewhere
  .constant('API_URL', 'http://localhost:3141');

})();