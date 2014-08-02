'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:RecommendationCtrl
 * @description
 * # RecommendationCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('RecommendationCtrl', function ($scope,$timeout,$http,$location) {
    
  		

		$scope.changeLocation = function(){
			var me = this;
			console.log(this);
  			var block = $(me).parent().parent();
  			var width = $(block).width()/ 1.5;

  			$(block).animate({
  				opacity: 0,
  				marginLeft: -width
  			}, 500);
		}

    $http.get("data/recommendation.json").
              success(function (data, status, headers, config) {
                  // deferred.resolve(data);
                  // console.log(data);
                  // return data.data;
                  $scope.data = data;
                  console.log($scope.data);
              }).
              error(function (data, status, headers, config) {
                  // deferred.reject(data);
                  alert("There is error occured while fetching data");
                  return null;
              });




		$timeout(function(){
    		
			$scope.foods = ['apple', 'muffin', 'chips'];

    		$('.remove-goods').bind('click', function (e){

  			
  			e.preventDefault();
  			var me = this;
  			var block = $(me).parent().parent();
  			var width = $(block).width()/ 1.5;

  			$(block).animate({
  				opacity: 0,
  				marginLeft: -width
  			}, 500);

  			// $('block').animate({
  			// 	opacity: 0,
  			// 	marginLeft: -width
  			// }, 500);


  			var delayN = 150;
    		var delayP = 150;

    		var nextEl = $(block).nextAll();
    		var prevEl = $(block).prevAll();

    		nextEl.each(function (index, elem) {
		        setTimeout(function () {
		            $(elem).animate({
		                opacity: 0,
		                marginLeft: -width
		              }, 500, function () {
		            });
		        }, delayN);
		        delayN += 100;
		    });

		    prevEl.each(function (index, elem) {
		        setTimeout(function () {
		        
		        	$(elem).animate({
		                opacity: 0,
		                marginLeft: -width
		              }, 500, function () {
		            });
		        }, delayP);
		        delayP += 100;
		    });
  	

  		});

  		}, 100);

		$timeout(function(){
    	
    		$('.remove-goods').bind('click', function (e){

  			
  			e.preventDefault();
  			var me = this;
  			var block = $(me).parent().parent();
  			var width = $(block).width()/ 1.5;

  			$(block).animate({
  				opacity: 0,
  				marginLeft: -width
  			}, 500);

  			// $('block').animate({
  			// 	opacity: 0,
  			// 	marginLeft: -width
  			// }, 500);


  			var delayN = 150;
    		var delayP = 150;

    		var nextEl = $(block).nextAll();
    		var prevEl = $(block).prevAll();

    		nextEl.each(function (index, elem) {
		        setTimeout(function () {
		            $(elem).animate({
		                opacity: 0,
		                marginLeft: -width
		              }, 500, function () {
		            });
		        }, delayN);
		        delayN += 100;
		    });

		    prevEl.each(function (index, elem) {
		        setTimeout(function () {
		        
		        	$(elem).animate({
		                opacity: 0,
		                marginLeft: -width
		              }, 500, function () {
		            });
		        }, delayP);
		        delayP += 100;
		    });
  	

  		});

  		}, 200);

      $scope.changeLocation = function(id){
        // $timeout(function(){
            $location.path("/recommend/"+id);
        // },2000);
      }

  });
