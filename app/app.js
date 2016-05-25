var watchedApp = angular
  .module('watchedApp', ['ngRoute','youtube-embed','ng-token-auth'])

  watchedApp.config(function($routeProvider){
    $routeProvider.when("/",
      {
        templateUrl: "views/game/new.html",
        controller: "MainController",
      }
    ).when("/user/new",
      {
        templateUrl: "views/user/new.html",
        controller: "UserController",
      }
    ).when("/user/login",
      {
        templateUrl: "views/user/login.html",
        controller: "UserController",
      }
    );
  });

  watchedApp.config(function($authProvider) {
        $authProvider.configure({
            apiUrl: 'http://localhost:3000'
        });
    });
