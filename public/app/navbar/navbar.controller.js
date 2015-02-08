(function(){
  "use strict";

  angular.module('app')
  .controller('NavController', NavController);

  NavController.$inject = ['$scope', 'authToken'];

  function NavController ($scope, authToken) {
    $scope.isAuthenticated = authToken.isAuthenticated;
  }
  
})();