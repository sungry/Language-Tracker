'user strict'

LogoutCtrl = ($scope, AuthToken, $state) ->
  AuthToken.removeToken()
  $state.go 'home'

angular.module('app').controller 'LogoutCtrl', LogoutCtrl
