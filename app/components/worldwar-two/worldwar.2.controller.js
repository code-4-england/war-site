(function() {
  'use strict';

  angular.module('warApp.ww2')

  .controller('ww2', ww2);

  ww2.$inject = ['$scope'];

  function ww2($scope) {
    $scope.firstName = "dave";
    $scope.lastName = "Doe";
    $scope.dave = { name:'Dave', hair: 'ginger', sex: 'male' };
    $scope.hannah = { name: 'Hannah', hair: 'blonde', sex: 'female' };
    $scope.color = 'green';
  };

})();