var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, allData){
$scope.allData = allData;
console.log($scope.allData)
});