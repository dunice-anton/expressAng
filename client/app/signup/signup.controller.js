'use strict';

angular.module('restfulNodeApp')
  .controller('SignupCtrl', function ($scope, $http) {
    $scope.response = {};
    $scope.signup = function() {
      var signup = {
        method: 'POST',
        url: '/api/v1.0/users',
        headers: {
          'apikey': "pDblTMZaFam59d@F9c#V1G9UEL17)Odz"
        },
        data: {
          "username": $scope.username,
          "password": $scope.password,
          "email": $scope.email
        }
      };
      $http(signup).success(function(signup) {
        console.log("signup", signup);
        if (signup.error){
          return $scope.response = signup
        }
        $scope.response = signup;
      }).error(function(data, status, headers, config) {
        console.log("signup error", data, status, headers, config)
      });
    };
  });
