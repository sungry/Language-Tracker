'user strict'

SignupCtrl = ($scope, Auth) ->

  $scope.submitForm = () ->
    Auth.signup($scope.userInfo)
    .success (res) ->
      console.log 'New account created.'
    .error (err) ->
      console.log 'Could not create account.'
      console.log err

angular.module('app').controller 'SignupCtrl', SignupCtrl
