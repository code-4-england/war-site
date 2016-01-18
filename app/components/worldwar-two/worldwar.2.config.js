(function() {
  'use strict';

  angular.module('warApp.ww2')

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/war', {
        controller: 'ww2',
        templateUrl: './components/worldwar-two/ww2.html'
      })
    }]);


})();