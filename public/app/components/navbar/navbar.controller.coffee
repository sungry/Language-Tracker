'use strict'

NavCtrl = ($scope, AuthToken) ->
  $scope.isAuthenticated = AuthToken.isAuthenticated

angular.module('app').controller 'NavCtrl', NavCtrl
