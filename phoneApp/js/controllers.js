var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});


phonecatApp.controller('WebDevCtrl', function($scope) {
  $scope.technology = [
    {'name': 'Grunt',
     'company': 'Google',
 	 'description':'Task runner'},
    {'name': 'Bower',
     'company': 'Twitter',
 	 'description':'Dependency generator'},
 	{'name': 'Yeoman',
     'company': 'Google',
 	 'description':'Scaffolding tool'},
 	{'name': 'Angular',
     'company': 'Google',
 	 'description':'MVC Framework'},
 	{'name': 'Gulp',
     'company': 'Fractal',
 	 'description':'Task runner'}
  ];
});