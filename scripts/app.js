'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
  .module('demoApp', [
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ngAnimate',
    'ngFx',
    'angular-carousel'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/analytical', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/recommendation', {
        templateUrl: 'views/recommendation.html',
        controller: 'RecommendationCtrl'
      })
      .when('/product/:id', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .when('/agro', {
        templateUrl: 'views/agro.html',
        controller: 'AgroCtrl'
      })
      .when('/training', {
        templateUrl: 'views/training.html',
        controller: 'TrainingCtrl'
      })
      .when('/exports', {
        templateUrl: 'views/exports.html',
        controller: 'ExportsCtrl'
      })
      .when('/recommend/:id', {
        templateUrl: 'views/recommend.html',
        controller: 'RecommendCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
