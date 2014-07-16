var webdevControllers = angular.module('webdevControllers', []);

webdevControllers.controller('WebDevListCtrl', function ($scope, $http) {
  $http.get('webdev.json').success(function(data) {
    $scope.technology = data;
  });

  $scope.orderProp = 'age';
});



webdevControllers.controller('WebDevDetailCtrl', [])