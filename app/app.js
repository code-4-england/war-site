(function() {
  'use strict';

  angular.module('warApp', [
    'ngRoute',
    'warApp.ww2'
  ])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      controller: 'ww2',
      templateUrl: './components/worldwar-two/ww2.html'
    })
  }]);

  angular.module('warApp.ww2', ['ngRoute']);

})();


