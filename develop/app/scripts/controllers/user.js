'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
.controller('UserCtrl', ['userService', function (userService) {
  var vm = this;
  userService.getUser('58b7d98b9c0c333a00f82939').then(function(successCallback){
  	var data = successCallback.data.user;
  	vm.name = data.name;
    vm.sid = data.username;
    vm.sex = data.sex == 1?"男":"女";
    vm.mobile = data.phone;
    vm.email = data.email;
    vm.avatar= "images/head.jpg";
  });
}]);
