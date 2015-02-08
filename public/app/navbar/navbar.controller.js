(function(){
  "use strict";

  angular
    .module('app')
    .controller('NavCtrl', NavCtrl);

  NavCtrl.$inject = ['$scope', 'AuthToken'];

  function NavCtrl ($scope, AuthToken) {
    $scope.isAuthenticated = AuthToken.isAuthenticated;
  }
  
})();