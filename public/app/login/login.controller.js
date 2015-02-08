(function(){
  "user strict";

  angular
    .module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', 'Auth'];

  function LoginCtrl ($scope, Auth) {
    $scope.submitForm = function(){
      Auth.login($scope.userInfo)
        .success(function(res) {
          console.log('Welcome back!');
        })
        .error(function(err) {
          console.log('Could not create account.');
          console.log(err);
        });
    };
  }

})();