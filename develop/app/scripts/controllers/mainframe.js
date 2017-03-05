'use strict';

/**
 * @ngdoc function
 * @name helmapApp.controller:MainframeCtrl
 * @description
 * # MainframeCtrl
 * Controller of the helmapApp
 */
angular.module('helmapApp')
  .controller('MainframeCtrl', function ($state) {
    var vm = this;
			if($state.current.name === "home"){ // reach here by login 
				var defaultState = 'home.main';
		    $state.go(defaultState);
			}
  });
