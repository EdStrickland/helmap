'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
  .controller('LoginCtrl', ['userService', '$state', "$cookieStore", function(userService, $state, $cookieStore) {
  	var vm = this;
  	vm.login = login;
    vm.register = register;

  	function login() {
  		var param = {
				"id": $("#username input").val().toString(),
				"pwd": $("#password input").val().toString()
			};
      var data;
  		userService.login(param).then(function(successCallback) {
  			data = successCallback.data;
  			console.log (data);
        if (data.ret =="0000"){
          $cookieStore.put("userid",data.uid);

          var defaultState = 'home.main';
          $state.go(defaultState);
        } else {
          alert(data.msg);
        }
  		})
  	}

    function register() {
      $state.go("register");
    }

  }]);
