(function(){
  "user strict";

  angular.module('app')

  .controller('SignupController', SignupController);

  SignupController.$inject = ['$scope', '$timeout'];

  function SignupController ($scope, $timeout) {
    console.log('SignupController initialized.');

    $scope.userInfo = {
      username: 'default',
      email: '',
      password: ''
    };
    $timeout(function(){
      // console.log(" changed? ", $scope.signupForm.name.$pristine);
      
    }, 5000);
  }

})();