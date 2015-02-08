(function(){
  "use strict";

  angular.module('app')

  .controller('NavController', NavController);

  NavController.$inject = ['$scope'];

  function NavController ($scope) {
    // remove scope parameter
    console.log('NavController initialized.');
  }
  
})();