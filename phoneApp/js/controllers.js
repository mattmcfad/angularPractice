var webdevApp = angular.module('webdevApp', []);


webdevApp.controller('WebDevCtrl', function ($scope, $http) {
  $http.get('webdev.json').success(function(data) {
    $scope.technology = data;
  });

  $scope.orderProp = 'age';
});



// webdevApp.controller('WebDevCtrl', function($scope) {
//   $scope.technology = [
//     {'name': 'Grunt',
//      'company': 'Google',
//  	 'description':'Task runner',
//  	 'age': 2011,
//  	},
//     {'name': 'Bower',
//      'company': 'Twitter',
//  	 'description':'Dependency generator',
//  	 'age': 2013
//  	},
//  	{'name': 'Yeoman',
//      'company': 'Google',
//  	 'description':'Scaffolding tool',
//  	 'age': 2013
//  	},
//  	{'name': 'Angular',
//      'company': 'Google',
//  	 'description':'MVC Framework',
//  	 'age': 2012
//  	},
//  	{'name': 'Gulp',
//      'company': 'Fractal',
//  	 'description':'Task runner',
//  	 'age': 2014
//  	}
//   ];

//   //Default order by
//   $scope.orderProp = 'age';
// });