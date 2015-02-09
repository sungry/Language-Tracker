(function(){
  "use strict";

  angular
    .module('app')
    .service('Auth', Auth);

  Auth.$inject = ['$http', 'AuthToken', '$state', 'API_URL'];

  function Auth ($http, AuthToken, $state, API_URL) {

    this.login = function (userInfo) {
      return $http.post(API_URL + '/login', userInfo).success(authSuccessful);
    };

    this.signup = function (userInfo) {
      return $http.post(API_URL + '/signup', userInfo).success(authSuccessful);
    };

    function authSuccessful (res) {
      AuthToken.setToken(res.token);
      $state.go('home');
    }
  }
})();