(function(){
  "use strict";

  angular.module('app')
  .factory('authToken', authToken);

  authToken.$inject = ['$window'];

  function authToken ($window) {
    var storage = $window.localStorage;
    var cachedToken;

    var token = {
      setToken: setToken,
      getToken: getToken,
      isAuthenticated: isAuthenticated
    };

    return token;

    function setToken (token) {
      cachedToken = token;
      storage.setItem('userToken', token);
    }
    function getToken () {
       if (!cachedToken) {
          cachedToken = storage.getItem('userToken');
       }

       return cachedToken;
    }
    function isAuthenticated () {
      return !!this.getToken();
    }
  }
})();