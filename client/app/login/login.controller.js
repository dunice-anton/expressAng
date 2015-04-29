'use strict';

angular.module('restfulNodeApp')
  .controller('LoginCtrl', function ($scope, $http, $rootScope) {
    $scope.login = function() {
      var apiLogin = {
        method: 'POST',
        url: '/api/v1.0/login',
        headers: {
          'apikey': "pDblTMZaFam59d@F9c#V1G9UEL17)Odz"
        },
        data: {
          "username": $scope.username,
          "password": $scope.password
        }
      };
      $http(apiLogin).success(function(user) {
        if (user.error){
          console.log("error", user)
          return $rootScope.user = user
        }
        $rootScope.user = user.data;
        //$scope.user = login.data;
        console.log("success", user)
      }).error(function(data, status, headers, config) {
        console.log("login error", data, status, headers, config)
      });
    };
  });
