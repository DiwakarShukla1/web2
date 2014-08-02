'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('ProductCtrl', function ($scope,$http) {
    	
    	$http.get("data/borocol12.json").
		          success(function (data, status, headers, config) {
		              // deferred.resolve(data);
		              // console.log(data);
		              // return data.data;
		              $scope.data = data;
		          }).
		          error(function (data, status, headers, config) {
		              // deferred.reject(data);
		              alert("There is error occured while fetching data");
		              return null;
          		});

  });
