(function(){
  "user strict";

  angular.module('app')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope', 'SignupService'];

  function SignupController ($scope, SignupService) {
    $scope.submitForm = function(){
      SignupService.submitNewUser($scope.userInfo);
    };
  }

})();