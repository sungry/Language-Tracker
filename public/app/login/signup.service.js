(function(){
  "use strict";

  angular.module('app')
  .factory('SignupService', SignupService);

  SignupService.$inject = ['$http', 'authToken'];

  function SignupService($http, authToken) {
    var signup = {
      submitNewUser: submitNewUser
    };

    return signup;

    function submitNewUser(userInfo) {
      $http.post('/api/signup', userInfo)
        .success(function(res) {
          authToken.setToken(res.token);
          console.log(data);
        })
        .error(function(err) {
          console.log('Error occurred creating a new user.');
          console.log(err);
        });
    };
  }
})();