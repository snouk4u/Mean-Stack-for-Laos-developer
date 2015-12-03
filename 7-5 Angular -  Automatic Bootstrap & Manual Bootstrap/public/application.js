'use strict';

var mainAppModule = angular.module('Hello', []);

mainAppModule.controller('NameController', ['$scope', '$http', function($scope, $http) {
	$scope.yourName = 'No Name';
	var users_json = $http.get('/user');
}]);

mainAppModule.filter('sayhello', function() {
	return function(name) {
		return 'Hello, ' + name;
	};
});
var mainAppModuleName = 'Main';
var mainAppModule = angular.module('mainAppModuleName', []);

angular.element(document).ready(function {
	angular.bootstrap(document.querySelector('#mainApp'), ['mainAppModuleName'], {
		strictDi: true
	});
});