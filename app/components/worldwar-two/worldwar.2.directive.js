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
    })

    .directive('ww2b', function() {
      return {
        restrict: 'E',
        scope: {
          user: '=user'
        },
        template: "<h2 ng-switch='user.sex'><span ng-switch-when='male'>His</span><span ng-switch-when='female'>Her</span> name is {{ user.name }}</h2>"
      }
    })

    .directive('ww2c', function() {
      return {
        restrict: 'E',
        scope: {
          user: '@user'
        },
        template: "<h2>hi my name is {{ user.name }}</h2>"
      }
    })

    .directive('helloWorld', function() {
      return {
        scope: {
          color: '@colorAttr'
        },
        restrict: 'AE',
        replace: true,
        template: '<p style="background-color:{{color}}">Hello world',
        link: function(scope, elem, attrs) {
          elem.bind('click', function() {
            elem.css('backgroung-color', 'white');
            scope.$apply(function() {
              scope.color = 'white';
            });
          });
          elem.bind('mouseover', function() {
            elem.css('cursor', 'pointer');
          })
        }
      }
    })

    .directive('jelloWorlds', function() {
      return {
        scope: {
          color: '@colorAttr'
        },
        restrict: 'AE',
        replace: true,
        template: '<p style="background-color:{{color}}">jello worlds',
        link: function(scope, elem, attrs) {
          elem.bind('click', function() {
            elem.css('backgroung-color', 'white');
            scope.$apply(function() {
              scope.color = 'white';
            });
          });
          elem.bind('mouseover', function() {
            elem.css('cursor', 'pointer');
          })
        }
      }
    });

})();