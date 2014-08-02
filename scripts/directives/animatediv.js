'use strict';

/**
 * @ngdoc directive
 * @name demoApp.directive:animatediv
 * @description
 * # animatediv
 */
angular.module('demoApp')
  .directive('animatediv', function ($window,$location,$timeout) {
    return function(scope, element, attrs) {
		// scope.$watch(attrs.animatediv, function(newVal){
		// 	if(newVal) {
		// 		TweenMax.to(element, 1, {opacity: 0});
		// 	}
		// })

			 element.bind("click",function(){
			 	// TweenMax.to(element, 1, {opacity: 0});
			 	// TweenMax.to(element,2,{width:$window.innerWidth,height:$window.innerHeight});
			 	
			 	console.log(attrs.change);
			 	console.log(this.getBoundingClientRect());
			 	
			 	
			 	
			 	$(this).css({
			 		'position':'fixed',
			 		'top': this.getBoundingClientRect().top +'px',
			 		'left': this.getBoundingClientRect().left + 'px',
			 		'z-index': '2',
			 		'text-indent': '-9999px'
			 	});

			 	TweenMax.to(element,1,{width:$window.innerWidth,height:$window.innerHeight, top: 0, left:0});
			 	TweenMax.to('#cbp-vm',1,{opacity:0});
			 	TweenMax.to(element,2,{opacity:0});
			 	$timeout(function(){
			 			$location.path(attrs.change);;
			 	},1000);
			 	// $(element).addClass("active");
			 });      
      }
  });
