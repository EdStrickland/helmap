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
        contentType: "application/json",
			  data: param
      });
      return promise;
    };

    this.register = function(param) {
      var promise = $http({
        method: 'POST',
        url: apiRoot + 'user/signup',
        contentType: "application/json",
        data: param
      });
      return promise;
    };

    this.save = function(param) {
      var promise = $http({
        method: 'POST',
        url: apiRoot + 'user/info',
        contentType: "application/json",
        data: param
      });
      return promise;
    };
  }]);
