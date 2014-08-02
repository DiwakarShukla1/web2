'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:resizable
 * @description
 * # resizable
 */
angular.module('demoApp')
  .directive('resizable', function ($window) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
      		// console.log(attrs);
      	 	// attrs.$set('height', 100);
      	 	scope.initializeVideoSize = function(){
      	 		attrs.$set('width',$window.innerWidth-2);
      	 		attrs.$set('height',$window.innerHeight-1.5);
      	 	}

      	 	scope.initializeVideoSize();

      	 	angular.element($window).bind('resize', function(){
      	 		scope.initializeVideoSize();
      	 		scope.$apply();
      	 	});
      }
    };
  });
