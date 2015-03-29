'use strict'

NotesCtrl = ($scope, $http, API_URL) ->
  $http.get(API_URL + '/notes')
  .success (notes) ->
    $scope.notes = notes
  .error (err) ->
    console.log err

angular.module('app').controller 'NotesCtrl', NotesCtrl
