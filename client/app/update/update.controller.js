'use strict';

angular.module('restfulNodeApp')
  .controller('UpdateCtrl', function ($scope, $http, $rootScope) {
    $scope.response = {};
    $scope.updateFields = {};
    $scope.update = function() {
      if ($scope.updateFields.email || $scope.updateFields.password || $scope.updateFields.username){

        console.log("updateFields", $scope.updateFields);
        var apiUpdate = {
          method: 'PUT',
          url: '/api/v1.0/user/' + $rootScope.user._id,
          headers: {
            'apikey': "pDblTMZaFam59d@F9c#V1G9UEL17)Odz"
          },
          data: $scope.updateFields
        };
        $http(apiUpdate).success(function(data) {
          console.log("update", data);
          if (data.error){
            console.log("update error", data);
            return $scope.response = data
          }
          $scope.updateFields = {};
          $scope.response = data;
        }).error(function(data, status, headers, config) {
          console.log("update error", data, status, headers, config)
        });
      }
      else return $scope.response.message = "please type something"


    };
  });
