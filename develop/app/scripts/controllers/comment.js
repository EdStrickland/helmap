'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:CommentCtrl
 * @description
 * # CommentCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
  .controller('CommentCtrl', ['commentService', 'userService', "$cookieStore", function(commentService, userService, $cookieStore) {
    var vm = this;
    vm.comment = comment;
    vm.init = init;

    init();

    function init() {
      commentService.getComments().then(function(successCallback) {
        var comments = successCallback.data.data;
        vm.comments = [];
        var user = [];

        for (var i = 0; i < comments.length; i++) {
          vm.comments.push({
            cid: comments[i]._id,
            descp: comments[i].descp,
            time: comments[i].time,
            userId: comments[i].userId,
            liked: comments[i].liked,
            __v: comments[i]._v,
            avatar: $cookieStore.get("avatar")
          })
        }
        vm.avatar = $cookieStore.get("avatar");
      })
    }

    function comment(tucao) {
      var data = {
        uid: $cookieStore.get("userid"),
        descp: tucao || "女生节快乐！"
      };
      console.log(data);
      commentService.createComment(data).then(function(successCallback) {
        init();
      })
    }

  }]);
