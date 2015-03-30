'user strict'

LoginCtrl = ($scope, Auth) ->
  $scope.submitForm = () ->
    Auth.login($scope.userInfo)
    .success (res) ->
      console.log 'Welcome back!'
    .error (err) ->
      console.log 'Could not create account.'
      console.log err

angular.module('app').controller 'LoginCtrl', LoginCtrl
