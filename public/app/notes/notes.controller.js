(function(){
  "use strict";

  angular
    .module('app')
    .controller('NotesCtrl', NotesCtrl);

  NotesCtrl.$inject = ['$scope', '$http', 'API_URL'];

  function NotesCtrl ($scope, $http, API_URL) {
    $http.get(API_URL + '/notes')
    .success(function(notes) {
      $scope.notes = notes;
    })
    .error(function(err) {
      console.log(err);
    });
  }
  
})();