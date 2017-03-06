'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:WishlistCtrl
 * @description
 * # WishlistCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
  .controller('WishlistCtrl', ['wishService', "$cookieStore", 'userService', function(wishService, $cookieStore, userService) {
    var vm = this;
    vm.init = init;
    vm.show = show;
    vm.finish = finish;

    vm.wishes = [];
    vm.page = 0;
    vm.inition = 0;
    init(0);

    function init(num) {
      if (num == 0 || num == 1) {
        vm.inition = num;
        vm.wishes = [];
        vm.page = 0;
        $("#load").css("display", "block");
        $("#load-complete").css("display", "none");
      }
      vm.inition = num || vm.inition;
      var user = $cookieStore.get("userid")
      wishService.getMyWishes(user, vm.inition, vm.page).then(function(successCallback) {
        var wishes = successCallback.data.data;
        if (wishes.length) {
          for (var i = 0; i < wishes.length; i++) {
            var isSelf = false;
            var isDone = false;

            if (wishes[i].status == 2) {
              isDone = true;
            } else if (vm.inition == 0) {
              isSelf = true;
            }

            var temp = wishes[i].userId;
            var gender;
            userService.getUser(temp).then(function(successCallback) {
              var data = successCallback.data.user;
              if (data)
                  gender = data.sex;
                else
                  gender = 1;
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
              isSelf: isSelf,
              isDone: isDone,
              avatar: gender==1?"images/head-b.jpg":"images/head-b.jpg"
            });
          }
          vm.page++;

        } else {
          $("#load").css("display", "none");
          $("#load-complete").css("display", "block");
        }
      });
    }

    function show($event) {
      var obj = $($event.currentTarget);
      $(".get-btn").css("display", "none");
      obj.children(".get-btn").css("display", "block");
      $(".wish-from").css("display", "none");
      obj.siblings().css("display", "block");
      var a = obj.children(".user-avatar").attr("wid").toString()
      userService.getUser(a).then(function(successCallback){
        var data = successCallback.data.user;
        vm.name = data.name;
        vm.mobile = data.phone;
        vm.email = data.email;
        var a ="'"+vm.name+"'";
        console.log (a);

        obj.parent().children(".wish-from").children(".wish-name").text("姓名："+ vm.name.toString());
        obj.parent().children(".wish-from").children(".wish-mobile").text("手机："+ vm.name.toString());
        obj.parent().children(".wish-from").children(".wish-email").text("邮箱："+ vm.name.toString());
      });
    }

    function finish($event) {
      var obj = $($event.currentTarget);
      var target = obj.parent();
      var user = $cookieStore.get("userid");
      var wid = wid;
      var data = {
        uid: user,
        wid: target.attr("wid")
      }
      wishService.finishWish(data).then(function(successCallback) {
        init(0);
      });
    }
  }]);
