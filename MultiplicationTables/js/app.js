angular.module("myApp", [])
    .controller("multiplyCtrl", function ($scope, $attrs) { // $attrs - Current attributes object for the element
        //$scope.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        $scope.numberLimit = $attrs.initialNumberLimit || 10;
        $scope.numbers = function () {
            var numbers = [];
            for (var i = 0; i < $scope.numberLimit; i++) {
                numbers[i] = i + 1;
            }
            return numbers;
        };
        $scope.multiply = function (a, b) {
            return a * b;
        };
    });