'use strict';

var mainAppModuleName = 'Main';
var mainAppModule = angular.module('mainAppModuleName', []);

mainAppModule.controller('NameController', ['$scope', '$http', function($scope, $http) {
          $scope.yourName = 'No Name';
          var users_json = $http.get('/user');
          }]);
      
        

angular.element(document).ready(function() {
    angular.bootstrap(document.querySelector('#mainApp'), ['mainAppModuleName'], {
          strictDi: true
         });
       });

mainAppModule.filter('sayhello', function() {
   return function(name) {
   return 'Hello, ' + name;
       };
      });