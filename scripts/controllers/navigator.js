'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:NavigatorCtrl
 * @description
 * # NavigatorCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
  .controller('NavigatorCtrl', ['userService', function (userService) {
  var vm = this;
  userService.getUser('58b7d98b9c0c333a00f82939').then(function(successCallback){
  	var data = successCallback.data.user;
  	vm.name = data.name
    vm.avatar = "images/head.jpg";
  });
}]);
