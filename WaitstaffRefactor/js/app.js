angular.module("myApp", ['ngRoute', 'ngAnimate'])
	.controller("MainCtrl", ['$rootScope', function ($rootScope) {
		$rootScope.data = {};
		$rootScope.total = {};
		$rootScope.earnings = {};



}]).run(function ($rootScope, $location, $timeout) {
		$rootScope.$on('$routeChangeError', function () {
			$location.path("/error");
		});
		$rootScope.$on('$routeChangeStart', function () {
			$rootScope.isLoading = true;
		});
		$rootScope.$on('$routeChangeSuccess', function () {
			$timeout(function () {
				$rootScope.isLoading = false;
			}, 1000);
		});
	})
	.config(function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: './home.tmpl.html',
			controller: 'HomeCtrl as home'
		}).when('/meals', {
			templateUrl: './meals.tmpl.html',
			controller: 'MealsCtrl as meals'
		}).when('/earnings', {
			templateUrl: './earnings.tmpl.html',
			controller: 'MealsCtrl as meals'
		}).when('/error', {
			template: '<p> Error - Page not found </p>'
		});
	})
	.controller('HomeCtrl', function ($scope, $rootScope) {}).controller('MealsCtrl', function ($scope, $rootScope) {
		$scope.submit = function () {
			if ($scope.myForm.$valid) {
				$rootScope.total.subtotal = (($rootScope.data.tax / 100) * $rootScope.data.base) + $rootScope.data.base;
				$rootScope.total.tip = $rootScope.data.base * ($rootScope.data.tip / 100);
				$rootScope.total.total = $rootScope.total.subtotal + $rootScope.total.tip;
				$rootScope.earnings.tiptotal = $rootScope.total.tip + ($rootScope.earnings.tiptotal || 0);
				$rootScope.earnings.mealcount = $rootScope.earnings.mealcount + 1 || 1;
				$rootScope.earnings.averagetip = $rootScope.earnings.tiptotal / $rootScope.earnings.mealcount;

				$rootScope.data = {};

			}
		};
		$scope.cancel = function () {
			$rootScope.data = {};
		};
		$scope.reset = function () {
			$rootScope.data = {};
			$rootScope.earnings = {};
			$rootScope.total = {};
		};
	}).controller('EarningsCtrl', function ($scope, $rootScope) {
		$scope.reset = function () {
			$rootScope.data = {};
			$rootScope.earnings = {};
			$rootScope.total = {};
		};
	});
