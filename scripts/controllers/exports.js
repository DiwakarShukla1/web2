'use strict';

/**
 * @ngdoc function
 * @name demoApp.controller:ExportsCtrl
 * @description
 * # ExportsCtrl
 * Controller of the demoApp
 */
angular.module('demoApp')
  .controller('ExportsCtrl', function ($scope) {
    Shadowbox.init({
    	handleOversize: "drag",
    	modal: true
	});
  });
