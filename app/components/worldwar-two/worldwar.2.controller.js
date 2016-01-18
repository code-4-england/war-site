(function() {
  'use strict';

  angular.module('warApp.ww2')

  .controller('ww2', ww2);

  ww2.$inject = ['$scope'];

  function ww2($scope) {
    $scope.firstName = "Johns";
    $scope.lastName = "Doe";

  };

})();