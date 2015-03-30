'use strict'

app = angular.module 'app', ['ui.router']

config = ($stateProvider, $urlRouterProvider, $httpProvider) ->

  states =
    home:
      url        : '/'
      templateUrl: '/app/components/home/home.html'
      controller :  'HomeCtrl'
    logout:
      url        : '/logout'
      controller : 'LogoutCtrl'
    signup:
      url        : '/signup'
      templateUrl: 'app/components/login/signup.html'
      controller : 'SignupCtrl'
    login:
      url        : '/login'
      templateUrl: 'app/components/login/login.html'
      controller : 'LoginCtrl'
    add:
      url        : '/add'
      templateUrl: 'app/components/add/add.html'
    notes:
      url        : '/notes'
      templateUrl: 'app/components/notes/notes.html'
      controller : 'NotesCtrl'

  for name, state of states
    $stateProvider.state name, state

  $urlRouterProvider.otherwise '/'

  $httpProvider.interceptors.push 'AuthInterceptor'

  return

app.config [
  '$stateProvider'
  '$urlRouterProvider'
  '$httpProvider'
  config
]
# Add constant for use elsewhere
app.constant 'API_URL', 'http://localhost:3141'
