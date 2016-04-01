var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'log-in.html'
	})
	.when('/dashboard', {
		resolve: {
			"check": function() {
				if($rootScope.loggedIn){
					$location.path('/')
				}
			}
		},
		templateUrl: 'dashboard.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});


app.controller('loginCtrl', function($scope, $location){
	$scope.submit = function() {
		
		if($scope.username == 'admin' && $scope.password == 'admin') {
			$rootScope.loggedIn = true;
			$location.path('/dashboard');
		} else {
			alert('Wrong Credentials');
		}
	};
});