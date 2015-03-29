'use strict'

app = angular.module 'app', ['ui.router']

config = ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) ->

  states =
    home:
      url        : '/'
      templateUrl: '/app/home/home.html'
      controller :  'HomeCtrl'
    logout:
      url       : '/logout'
      controller: 'LogoutCtrl'
    signup:
      url        : '/signup'
      templateUrl: 'app/login/signup.html'
      controller : 'SignupCtrl'
    login:
      url        : '/login'
      templateUrl: 'app/login/login.html'
      controller : 'LoginCtrl'
    add:
      url        : '/add'
      templateUrl: 'app/add/add.html'
    notes:
      url        : '/notes'
      templateUrl: 'app/notes/notes.html'
      controller : 'NotesCtrl'

  for name, state of states
    $stateProvider.state name, state

  $urlRouterProvider.otherwise '/'

  $httpProvider.interceptors.push 'AuthInterceptor'

  # Use the HTML5 History API, removing /#/
  $locationProvider.html5Mode true
  return

app.config [
  '$stateProvider'
  '$urlRouterProvider'
  '$locationProvider'
  '$httpProvider'
  config
]
# Add constant for use elsewhere
app.constant 'API_URL', 'http://localhost:3141'
