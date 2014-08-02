'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('ProfileCtrl', function ($scope,$window) {
    
  		$scope.initializeMargin = function(){
        	var winHeight = $window.innerHeight;
          	$(".effect-sarah").css("height",winHeight/2);
        }

        $scope.initializeMargin();

        angular.element($window).bind('resize', function() {
	      scope.initializeMargin();
	      scope.$apply();
	    });

  });
