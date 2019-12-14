var tsEntertainmentApp = angular.module('tsEntertainmentApp', []);

tsEntertainmentApp.controller('VenuesListCtrl', function ($scope, $http) {	
	$http.get('https://data.cityofnewyork.us/resource/2pc8-n4xe.json').success(function(data) {
		$scope.venues = data;
		
	});			
});