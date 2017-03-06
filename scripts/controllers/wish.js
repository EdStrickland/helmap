'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:WishCtrl
 * @description
 * # WishCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
  .controller('WishCtrl', ['wishService', 'userService', "$cookieStore", function(wishService, userService, $cookieStore) {
    var vm = this;
    vm.change = change;
    vm.create = create;
    vm.show = show;
    vm.accept = accept;

    vm.loc = 2;
    vm.page = 0;
    vm.wishes = [];
    change(2);

    function change(x) {
      if (x) {
        vm.loc = x;
        vm.wishes = [];
        vm.page = 0;
        $("#load").css("display", "block");
        $("#load-complete").css("display", "none");
      }
      wishService.getWishes(vm.loc, vm.page).then(function(successCallback) {
        var wishes = successCallback.data.data;
        if (wishes.length) {
          for (var i = 0; i < wishes.length; i++) {

            if (wishes[i].status != 2 && wishes[i].status != 1) {

              var temp = wishes[i].userId;
              userService.getUser(temp).then(function(successCallback) {
                var data = successCallback.data.user;
                if (data)
                  vm.gender = data.sex;
                else
                  vm.gender = 1;
              });
              vm.wishes.push({
                wid: wishes[i]._id,
                descp: wishes[i].descp,
                time: wishes[i].time,
                loc: wishes[i].loc == 1 ? "中北校区" : "闵行校区",
                status: wishes[i].status,
                userId: wishes[i].userId,
                __v: wishes[i]._v,
                recvId: wishes[i].recvId,
                avatar: vm.gender == 1 ? "images/head-b.jpg" : "images/head-b.jpg"
              });
            }
          }
          vm.page++;
          vm.avatar = $cookieStore.get("avatar");
        } else {
          $("#load").css("display", "none");
          $("#load-complete").css("display", "block");
        }
      });
    }

    function create(input) {
      vm.dataCreate = {
        uid: $cookieStore.get("userid"),
        descp: input.descp,
        loc: input.loc
      };
      
      var user = $cookieStore.get("userid");
      var userModel = {};
      userService.getUser(user).then(function(successCallback) {
        var data = successCallback.data.user;
        userModel.mobile = data.phone;
        userModel.email = data.email;
        if (userModel.email == null || userModel.mobile == null || userModel.email == '' || userModel.mobile == '') {
          alert("请完善个人信息");
          return;
        }else{
          wishService.createWish(vm.dataCreate).then(function(successCallback) {
            change(2);
          })
        }
      })
    }

    function show($event) {
      var obj = $($event.currentTarget);
      $(".get-btn").css("display", "none");
      obj.children(".get-btn").css("display", "block");
    }

    function accept($event) {
      var obj = $($event.currentTarget);
      var target = obj.parent();
      var user = $cookieStore.get("userid");
      var wid = wid;
      var data = {
        uid: user,
        wid: target.attr("wid")
      }
      wishService.acceptWish(data).then(function(successCallback) {
        change(2);
      });
    }


  }]);
