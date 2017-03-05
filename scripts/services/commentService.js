'use strict';

/**
 * @ngdoc service
 * @name helmapApp.comment
 * @description
 * # comment
 * Service in the helmapApp.
 */
angular.module('helmapApp')
  .service('commentService', ['$http', 'apiRoot', function($http, apiRoot) {

    $http.defaults.headers = {
      'Content-Type': 'application/json'
    };

    this.getComments = function() {
      var comments = $http({
        method: 'get',
        url: apiRoot + 'tucao/getlist',
      });
      return comments;
    }

    this.createComment = function(data) {
      var comment = $http({
        method: 'post',
        url: apiRoot + 'tucao/send',
        data: data
      });
      return comment;
    }
  }]);
