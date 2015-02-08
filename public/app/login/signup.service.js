(function(){
  "use strict";

  angular.module('app')

  .factory('SignupService', SignupService);

  SignupService.$inject = ['$http'];

  function SignupService($http) {
    var signup = {
      submitNewUser: submitNewUser
    };

    return signup;

    function submitNewUser(userInfo) {
      $http.post('/api/signup', userInfo)
        .success(function(data, status, headers, config) {
          console.log('success');
        })
        .error(function(data, status, headers, config) {
          console.log('error');
        });
    };
  }
})();