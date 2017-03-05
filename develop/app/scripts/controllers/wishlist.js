'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:WishlistCtrl
 * @description
 * # WishlistCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
  .controller('WishlistCtrl', ['wishService', function(wishService) {
    var vm = this;
    vm.init = init;
    vm.wishes = [];
    vm.page = 0;
    vm.inition = 0;
    init(0);

    function init(num) {
      if (num == 0 || num == 1) {
        vm.inition = num;
        vm.wishes = [];
        vm.page = 0;
        $("#load").css("display","block");
        $("#load-complete").css("display","none");
      }
      vm.inition = num || vm.inition;
      wishService.getMyWishes('58b7d98b9c0c333a00f82939', vm.inition, vm.page).then(function(successCallback) {
        var wishes = successCallback.data.data;
        if (wishes.length) {
          console.log(wishes);
          for (var i = 0; i < wishes.length; i++) {
            vm.wishes.push({
              wid: wishes[i]._id,
              descp: wishes[i].descp,
              time: wishes[i].time,
              loc: wishes[i].loc == 1 ? "中北校区" : "闵行校区",
              status: wishes[i].status,
              userId: wishes[i].userId,
              __v: wishes[i]._v,
              recvId: wishes[i].recvId,
            });
          }
          vm.page++;
          vm.avatar = "images/head.jpg";
        } else {
          $("#load").css("display", "none");
          $("#load-complete").css("display", "block");
        }
      });
    }
  }]);
