angular.module("myApp", [])
	.controller('madlibsCtrl', ['$scope', function ($scope) {
		$scope.submitted = false;
		$scope.data = {
			name: null,
			jobtitle: null,
			tedioustask: null,
			dirtytask: null,
			celebrity: null,
			useless: null,
			obcelebrity: null,
			number: null,
			adjective: null
		};

		$scope.submit = function () {
			if ($scope.myForm.$valid) {
				console.log('form is valid:from submit');
				$scope.submitted = true;
			} else {
				$scope.submitted = false;
				console.log('form is invalid');
			}
		}

		$scope.startOver = function () {
			$scope.data = {};
			$scope.submitted = false;
		}
}]);
