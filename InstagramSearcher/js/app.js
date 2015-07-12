angular.module("instaSearch", [])
	.controller("instaSearchCtrl", ['$scope', '$http', '$q', function ($scope, $http, $q) {
		$scope.searchQuery = "";
		$scope.message = "";
		$scope.submitForm = false;
		$scope.hasError = false;
		$scope.results = {};
		var config;

		function wait() {
			var defer = $q.defer();
			setTimeout(function () {
				defer.resolve();
			}, 2000);

			return defer.promise;
		}

		function submitReq() {
			$scope.submitForm = true;
			config = {
				'params': {
					client_id: 'df1be7028ee843dcb68036adc5bfc557',
					callback: 'JSON_CALLBACK'
				}
			}
		}

		function getResults() {
			var tag = $scope.searchQuery;
			$http.jsonp("https://api.instagram.com/v1/tags/" + tag + "/media/recent", config)
				.success(function (result) {
					$scope.results = result.data;
					$scope.resultCount = $scope.results.length || 0;
					console.log($scope.results);
					$scope.message = "We found " + $scope.resultCount + " results for " + tag;
				})
				.error(function (result) {
					$scope.hasError = true;
					$scope.message = "Instagram Server fails to respond";
				});
		}

		$scope.submit = function () {
			if ($scope.myForm.$valid) {
				$scope.message = "Searching results for " + $scope.searchQuery;
				submitReq();
				return wait().then(getResults);
			}
		}
	}]);
