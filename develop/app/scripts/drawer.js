'use strict';

/**
 * @ngdoc service
 * @name helmapApp.comment
 * @description
 * # comment
 * Service in the helmapApp.
 */
$(document).ready(function() {
  $(document).on('click', 'main', function() {
    $("#drawer").removeClass('open');
  })
  $(document).on('click', '#hamburger-icon', function() {
    $("#drawer").addClass('open');
  })

  $(document).on('click',"#wish-switch li",function(){
  	$(".switch-selected").removeClass("switch-selected");
  	$(this).addClass("switch-selected");
  })
  $(document).on('click',"#go-top",function(){
    scroll(0,0);
  })
})
