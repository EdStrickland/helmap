'use strict';

/**
 * @ngdoc service
 * @name helmapApp.userService
 * @description
 * # userService
 * Service in the helmapApp.
 */
angular.module('helmapApp')
  .service('userService', ['$http', 'apiRoot', function($http, apiRoot) {

    $http.defaults.headers = {
      'Content-Type': 'application/json'
    };
    this.getUser = function(uid) {
      var user = $http({
        method: 'get',
        url: apiRoot + 'user/info?uid=' + uid,
      })
      return user;
    }

    this.login = function(param) {
      var promise = $http({
        method: 'POST',
        url: apiRoot + 'user/login',
        data: param
      });
      return promise;
    };
  }]);
