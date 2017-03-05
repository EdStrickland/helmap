'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:WishCtrl
 * @description
 * # WishCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
.controller('WishCtrl', ['wishService', function(wishService) {
  var vm = this;
  vm.change = change;
  vm.create = create;
  vm.loc = 2;
  vm.page = 0;
  vm.wishes = [];
  change(2);

  function change (x) {
    if (x) {
      vm.loc = x;
      vm.wishes = [];
      vm.page = 0;
      $("#load").css("display","block");
      $("#load-complete").css("display","none");
    }
    wishService.getWishes(vm.loc, vm.page).then(function(successCallback) {
      var wishes = successCallback.data.data;
      if (wishes.length){
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
        vm.page ++;
        vm.avatar = "images/head.jpg";
      } else {
        $("#load").css("display","none");
        $("#load-complete").css("display","block");
      }
    });
  }

  function create(input) {
  	var data = {
  		uid: "58b7d98b9c0c333a00f82939",
			descp: input.descp,
			loc: input.loc
  	};
  	wishService.createWish(data).then(function(successCallback){
  		change (2);
  	})
  }


}]);