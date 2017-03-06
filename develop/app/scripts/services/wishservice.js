'use strict';

/**
 * @ngdoc service
 * @name helmapApp.wishService
 * @description
 * # wishService
 * Service in the helmapApp.
 */
angular.module('helmapApp')
  .service('wishService', ['$http', 'apiRoot', function($http, apiRoot) {


    this.createWish = function(data) {
      var wish = $http({
        method: 'post',
        url: apiRoot + 'wish/create',
        contentType: "application/json",
        data: data
      })
      return wish;
    }

    this.getMyWishes = function(uid, from, page) {
      var wish = $http({
        method: 'get',
        url: apiRoot + 'wish/getlist?page=' + page + '&uid=' + uid + '&from=' + from,
      })
      wish = wish;
      return wish;
    }

    this.getWishes = function(loc, page) {
      var url = apiRoot + 'wish/getlist?page=' + page;
      if (loc != 2)
        url += "&loc=" + loc;

      var wish = $http({
        method: 'get',
        url: url,
      })
      return wish;
    }

    this.finishWish = function(data){
      var wish = $http({
        method: 'post',
        url: apiRoot + 'wish/finish',
        contentType: "application/json",
        data: data
      })
      return wish;
    }

    this.acceptWish = function(data){
      var wish = $http({
        method: 'post',
        url: apiRoot + 'wish/accept',
        contentType: "application/json",
        data: data
      })
      return wish;
    }
  }]);
