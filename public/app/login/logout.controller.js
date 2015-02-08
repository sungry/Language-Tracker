(function(){
  "user strict";

  angular
    .module('app')
    .controller('LogoutCtrl', LogoutCtrl);

  LogoutCtrl.$inject = ['$scope', 'AuthToken', '$state'];

  function LogoutCtrl ($scope, AuthToken, $state) {
    AuthToken.removeToken();
    $state.go('home');
  }

})();