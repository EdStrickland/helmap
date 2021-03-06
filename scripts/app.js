'use strict';

/**
 * @ngdoc overview
 * @name helmapApp
 * @description
 * # helmapApp
 *
 * Main module of the application.
 */
angular
  .module('helmapApp', [
    'ngAnimate',
    'ngCookies',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    
    // $httpProvider.defaults.headers.common = {'Content-Type' : "application/json"};
    // console.log($httpProvider.defaults.headers.common);
    $httpProvider.defaults.withCredentials = false;
    // $httpProvider.interceptors.push('httpInterceptor');
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller : "LoginCtrl",
      controllerAs: "vm"
    })
    .state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller : "RegisterCtrl",
      controllerAs: "vm"
    })
    .state('home', {
      url: '/',
      controller: "MainframeCtrl",
      controllerAs: "vm",
      templateUrl: 'views/mainframe.html'
    })
    .state('home.user', {
      url: '/user',
      templateUrl: 'views/user.html'
    })
    .state('home.main', {
      url: '/',
      templateUrl: 'views/main.html'
    })
    .state('home.wishlist', {
      url: '/wishlist',
      templateUrl: 'views/wishlist.html'
    })
    .state('home.chat', {
      url: '/chat',
      templateUrl: 'views/chat.html'
    }).state('home.chatbox', {
      url: '/',
      templateUrl: 'views/chatbox.html'
    })
    .state('home.notification', {
      url: 'notification',
      templateUrl: 'views/notification.html'
    }).state('home.help', {
      url: '/help/',
      templateUrl: 'views/help.html'
    }).state('home.ask', {
      url: '/ask',
      templateUrl: 'views/ask.html'
    });
    
  }])
  .factory('apiRoot', function(){
      return 'http://115.28.101.55:3000/';
    });
