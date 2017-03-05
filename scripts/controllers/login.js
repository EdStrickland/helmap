'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
  .controller('LoginCtrl', ['userService', function(userService) {
  	var vm = this;
  	vm.login = login;

  	function login() {
  		var param = {
				"id": "10142510110",
				"pwd": "KQ$(f62k"
			};
  		userService.login(param).then(function(successCallback) {
  			var data = successCallback.data.data;
  			console.log (data);
  		})
  	}
  }]);
