'use strict'

Auth = ($http, AuthToken, $state, API_URL) ->
  authSuccessful = (res) ->
    AuthToken.setToken res.token
    $state.go 'home'

  service =
    login: (userInfo) ->
      $http.post(API_URL + '/login', userInfo).success authSuccessful

    signup: (userInfo) ->
      $http.post(API_URL + '/signup', userInfo).success authSuccessful

angular.module('app').factory 'Auth', [
  '$http'
  'AuthToken'
  '$state'
  'API_URL'
  Auth
]
