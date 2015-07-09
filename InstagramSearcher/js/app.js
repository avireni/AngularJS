angular.module("instaSearch", [])
	.controller("instaSearchCtrl", ['$scope', '$http', '$q', function ($scope, $http, $q) {
		$scope.searchQuery = "";
		$scope.message = "";
		$scope.submitForm = false;
		$scope.results = {};

		function wait() {
			var defer = $q.defer();
			setTimeout(function () {
				defer.resolve();
			}, 2000);
			return defer.promise;
		}
		$scope.submit = function () {
			var tag = $scope.searchQuery;
			if ($scope.myForm.$valid) {
				$scope.submitForm = true;
				var config = {
					'params': {
						client_id: 'df1be7028ee843dcb68036adc5bfc557c',
						callback: 'JSON_CALLBACK'
					}
				}
				$http.jsonp("https://api.instagram.com/v1/tags/" + tag + "/media/recent", config)
					.success(function (result) {
						$scope.results = result.data;
						$scope.resultCount = $scope.results.length || 0;
						console.log($scope.results);
					});

			}
		}
}]);
