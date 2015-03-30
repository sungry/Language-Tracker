'use strict'

AuthToken = ($window) ->
  storage = $window.localStorage
  userToken = 'userToken'
  cachedToken = null

  token =
    setToken: (token) ->
      # CachedToken allows us to store jwt in variable
      # instead of always having to access local storage
      cachedToken = token
      storage.setItem userToken, token

    getToken: () ->
      if !cachedToken
        cachedToken = storage.getItem userToken

      cachedToken

    removeToken: () ->
      cachedToken = null
      storage.removeItem userToken

    isAuthenticated: () ->
      !!token.getToken()

angular.module('app').factory 'AuthToken', [
  '$window'
  AuthToken
]