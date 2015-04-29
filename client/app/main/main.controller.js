'use strict';

angular.module('restfulNodeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.users = [];

    var getUsers = {
      method: 'GET',
      url: '/api/v1.0/users',
      headers: {
        'apikey': "pDblTMZaFam59d@F9c#V1G9UEL17)Odz"
      }
    };
    $http(getUsers).success(function(users) {
      $scope.users = users;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
