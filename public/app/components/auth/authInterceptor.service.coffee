'use strict'

AuthInterceptor = (AuthToken) ->
  service =
    request: (config) ->
      token = AuthToken.getToken()

      if token
        config.headers.Authorization = "Bearer #{token}"

      config

    response: (response) ->
      response

angular.module('app').factory 'AuthInterceptor', [
  'AuthToken'
  AuthInterceptor
]
