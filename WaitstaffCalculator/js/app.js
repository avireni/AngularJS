angular.module("myApp", [])
    .controller("calcCtrl", ["$scope", function ($scope) {
        $scope.data = {};
        $scope.total = {};
        $scope.earnings = {};
        $scope.submit = function () {
            if ($scope.myForm.$valid) {
                $scope.total.subtotal = (($scope.data.tax / 100) * $scope.data.base) + $scope.data.base;
                $scope.total.tip = $scope.data.base * ($scope.data.tip / 100);
                $scope.total.total = $scope.total.subtotal + $scope.total.tip;


                $scope.earnings.tiptotal = $scope.total.tip + ($scope.earnings.tiptotal || 0);
                $scope.earnings.mealcount = $scope.earnings.mealcount + 1 || 1;
                $scope.earnings.averagetip = $scope.earnings.tiptotal / $scope.earnings.mealcount;

                $scope.data = {};
            }
        };
        $scope.cancel = function () {
            $scope.data = {};
        };
        $scope.reset = function () {
            $scope.data = {};
            $scope.earnings = {};
            $scope.total = {};
        };

}]);
