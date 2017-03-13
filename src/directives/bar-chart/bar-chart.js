var app = angular.module('myApp', []);

app.directive('barChart', function ($parse) {
     var directiveDefinitionObject = {
         restrict: 'E',
         replace: false,
         scope: {data: '=chartData'},
         link: function (scope, element, attrs) {
           var chart = d3.select(element[0]);
            chart.append("div").attr("class", "chart")
             .selectAll('div')
             .data(scope.data).enter().append("div")
             .transition().ease("elastic")
             .style("width", function(d) { return d + "%"; })
             .text(function(d) { return d + "%"; });
         }
      };
      return directiveDefinitionObject;
   });

app.controller('Ctrl', ['$scope', function($scope){
  $scope.myData = [10,20,30,40,60, 80, 20, 50];
}]);
/*function Ctrl($scope) {
    $scope.myData = [10,20,30,40,60, 80, 20, 50];
}*/
