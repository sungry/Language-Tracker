(function(){
  "user strict";

  angular
    .module('app')
    .controller('SignupCtrl', SignupCtrl);

  SignupCtrl.$inject = ['$scope', 'Auth'];

  function SignupCtrl ($scope, Auth) {

    $scope.submitForm = function(){
      Auth.signup($scope.userInfo)
        .success(function(res) {
          console.log('New account created.');
        })
        .error(function(err) {
          console.log('Could not create account.');
          console.log(err);
        });
    };
  }

})();