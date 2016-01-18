(function() {
  'use strict';

  angular.module('warApp.ww2')

    .directive('ww2', function() {
      return {
        template: "<p>It's me! {{ firstName  }}</p>"
      }
    })

    .directive('ww2a', function() {
      return {
        templateUrl: "./components/worldwar-two/inputs.html"
      }
    });

})();