'use strict';

angular.module('restfulNodeApp')
  .controller('NavbarCtrl', function ($scope, $location, $http, $rootScope) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },
      {
        'title': 'Login',
        'link': '/login'
      },
      {
        'title': 'Signup',
        'link': '/signup'
      },
      {
        'title': 'Update',
        'link': '/update'
      }

    ];

    $scope.logout = function(){
      var logout = {
        method: 'GET',
        url: '/api/v1.0/logout',
        headers: {
          'apikey': "pDblTMZaFam59d@F9c#V1G9UEL17)Odz"
        }
      };
      $http(logout).success(function() {
        $rootScope.user = {};
        console.log("logout");
      })
    };

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
