'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:grid
 * @description
 * # grid
 */
angular.module('demoApp')
  .directive('grid', function ($window) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        // var winHeight = $window.innerHeight;
        // element.css('margin-top',winHeight+'px');

        scope.initializeMargin = function(){
        	var winHeight = $window.innerHeight;
        	element.css('margin-top',winHeight+'px');
          $(".effect-sarah").css("height",winHeight/2);
        }

        scope.initializeMargin();

        angular.element($window).bind('resize', function() {
	      scope.initializeMargin();
	      scope.$apply();
	    });
      }
    };
  });
