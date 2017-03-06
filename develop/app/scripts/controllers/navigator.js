'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:NavigatorCtrl
 * @description
 * # NavigatorCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
  .controller('NavigatorCtrl', ['userService', "$cookieStore", function (userService, $cookieStore) {
  var vm = this;
  var user = $cookieStore.get("userid");
  userService.getUser(user).then(function(successCallback){
  	var data = successCallback.data.user;
  	vm.name = data.name;
  	vm.sex = data.sex;
    vm.avatar = vm.sex == 1?"images/head-b.jpg":"images/head-b.jpg";
    $cookieStore.put("avatar",vm.avatar);
  });
}]);
