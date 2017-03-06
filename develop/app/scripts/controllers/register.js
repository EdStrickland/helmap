'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
  .controller('RegisterCtrl', ['userService', '$state', "$cookieStore", function(userService, $state, $cookieStore) {
  	var vm = this;
    vm.register = register;

  	function register() {
  		var param = {
				"id": $("#Rusername input").val().toString(),
				"pwd": $("#Rpassword input").val().toString()
			};
      var data;
  		userService.register(param).then(function(successCallback) {
  			data = successCallback.data;
  			console.log (data);
        if (data.ret =="0000"){
          $cookieStore.put("userid",data.data.uid);

          var defaultState = 'home.main';
          $state.go(defaultState);
        } else {
          alert(data.msg);
        }
  		})
  	}

  }]);
