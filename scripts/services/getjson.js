'use strict';

/**
 * @ngdoc service
 * @name demoApp.getJson
 * @description
 * # getJson
 * Factory in the demoApp.
 */
angular.module('demoApp')
  .factory('getJson', ['$http',function ($http) {
    // Service logic
    // ...
    var sdo = {

        getProduct: function(){

          var promise = $http.get("data/products.json").
          success(function (data, status, headers, config) {
              // deferred.resolve(data);
              return data;
              // $scope.data = data;
          }).
          error(function (data, status, headers, config) {
              // deferred.reject(data);
              alert("There is error occured while fetching farmer data");
              return null;
          });

          return promise;

        }
    }


    return sdo;
  }]);
