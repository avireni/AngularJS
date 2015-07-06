angular.module("myApp", [])
    .controller('madlibsCtrl', ['$scope', function ($scope) {
        $scope.submitted = false;
        //    $scope.name= "Name";
        //    $scope.jobtitle= "Job title";
        //    $scope.tedioustask ="Tedious task";
        //    $scope.dirtytask= "Dirty task";
        //    $scope.celebrity= "Celebrity";
        //    $scope.useless= "Useless";
        //    $scope.obcelebrity= "Obnoxious celebrity";
        //    $scope.number= 10;
        //    $scope.adjective= "Adjective";
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
                console.log('form is valid');
                $scope.submitted = true;
            } else {
                $scope.submitted = false;
                console.log('form is invalid');
            }
        }
        $scope.startOver = function () {
            $scope.submitted = false;
            $scope.data = {};

        }
}]);