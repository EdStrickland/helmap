'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:CommentCtrl
 * @description
 * # CommentCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
  .controller('CommentCtrl', ['commentService', 'userService', function(commentService, userService) {
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
            avatar: "images/head.jpg"
          })
        }
        vm.avatar = "images/head.jpg";
      })
    }

    function comment(tucao) {
      var data = {
        uid: "58b7d98b9c0c333a00f82939",
        descp: tucao
      };
      console.log(data);
      commentService.createComment(data).then(function(successCallback) {
        init();
      })
    }

  }]);
