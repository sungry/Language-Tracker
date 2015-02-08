(function(){
  "user strict";

  angular.module('app')

  .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope', 'SignupService'];

  function SignupController ($scope, SignupService) {
    console.log('SignupController initialized.');

    $scope.userInfo = {
      username: '',
      email: '',
      password: ''
    };

    $scope.submitForm = function(){
      SignupService.submitNewUser($scope.userInfo);
      
    };

  }

})();