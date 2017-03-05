'use strict';

/**
 * @ngdoc service
 * @name helmapApp.userService
 * @description
 * # userService
 * Service in the helmapApp.
 */
angular.module('helmapApp')
  .factory('userService', ['$http', 'apiRoot', function($http, apiRoot) {

    // $http.defaults.headers.post['Content-Type'] = "application/json";

    var service = {
    	geUser: getUser,
    	login: login
    }
    function getUser(uid) {
      var user = $http({
        method: 'get',
        url: apiRoot + 'user/info?uid=' + uid,
      })
      return user;
    }

    function login(param) {
      var promise = $http({
        method: 'POST',
			  url: apiRoot + 'user/login',
			  data: {
              "id": "10142510110",
              "pwd": "KQ$(f62k"
          }
      });
      return promise;
    };

    return service;
  }]);
