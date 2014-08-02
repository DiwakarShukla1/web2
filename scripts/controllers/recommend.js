'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:RecommendCtrl
 * @description
 * # RecommendCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('RecommendCtrl', function ($scope,$http) {
    Shadowbox.init({
    	handleOversize: "drag",
    	modal: true
	});

	$http.get("data/Pulses.json").
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
  });
