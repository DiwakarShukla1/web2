'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:AgroCtrl
 * @description
 * # AgroCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('AgroCtrl', function ($scope) {
    Shadowbox.init({
    	handleOversize: "drag",
    	modal: true
	});
  });
