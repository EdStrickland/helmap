'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
.controller('UserCtrl', ['userService', "$cookieStore", function (userService, $cookieStore) {
  var vm = this;

  vm.edit = edit;
  vm.save = save;

  var user = $cookieStore.get("userid");
  userService.getUser(user).then(function(successCallback){
  	var data = successCallback.data.user;
  	vm.name = data.name;
    vm.sid = data.username;
    vm.sex = data.sex == 1?"男":"女";
    vm.mobile = data.phone;
    vm.email = data.email;
    vm.avatar= $cookieStore.get("avatar");
  });

  function edit($event) {
    var obj = $($event.currentTarget);
    obj.children("p").css("display","none");
    obj.children("input").css("display","block");
  }

  function save() {
    vm.sex = $(".personal-gender input").val().toString();
    vm.mobile = $(".personal-mobile input").val().toString();
    vm.email = $(".personal-mail input").val().toString();
    $("p").css("display","block");
    $("input").css("display","none");
    var userModel = {
      "uid": $cookieStore.get("userid"),
      "name": vm.name,
      "sex": vm.sex =="男"?1:0,
      "phone": parseInt(vm.mobile),
      "email": vm.email
    }
    userService.save(userModel).then(function(successCallback){

    });
  }

}]);
