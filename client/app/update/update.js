'use strict';

angular.module('restfulNodeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('update', {
        url: '/update',
        templateUrl: 'app/update/update.html',
        controller: 'UpdateCtrl'
      });
  });
