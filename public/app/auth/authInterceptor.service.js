(function(){
  "use strict";

  angular
    .module('app')
    .factory('AuthInterceptor', AuthInterceptor);

  AuthInterceptor.$inject = ['AuthToken'];

  function AuthInterceptor (AuthToken) {
    var service = {
      request: request,
      response: response
    };

    return service;

    /**************************/

    function request (config) {
      var token = AuthToken.getToken();

      if (token)
        config.headers.Authorization = 'Bearer ' + token;

      return config;
    }
    function response (response) {
      return response;
    }
  }
})();