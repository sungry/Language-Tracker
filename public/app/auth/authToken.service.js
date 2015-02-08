(function(){
  "use strict";

  angular
    .module('app')
    .factory('AuthToken', AuthToken);

  AuthToken.$inject = ['$window'];

  function AuthToken ($window) {
    var storage = $window.localStorage;
    var userToken = 'userToken';
    var cachedToken;

    var token = {
      setToken: setToken,
      getToken: getToken,
      removeToken: removeToken,
      isAuthenticated: isAuthenticated
    };

    return token;

    /**************************/

    function setToken (token) {
      // CachedToken allows us to store jwt in variable
      // instead of always having to access local storage 
      cachedToken = token;
      storage.setItem(userToken, token);
    }
    function getToken () {
       if (!cachedToken)
          cachedToken = storage.getItem(userToken);

       return cachedToken;
    }
    function isAuthenticated () {
      return !!token.getToken();
    }
    function removeToken() {
      cachedToken = null;
      storage.removeItem(userToken);
    }
  }
})();