angular.module('uiRouterKitty', ['ui.router'])
    .controller('homeController',['$scope','$rootScope',function($scope,$rootScope){
        $rootScope.title='kitty';
        $scope.tab=[
            {
                'title':'月计划',
                'url':'.home-month'
            },
            {
                'title':'季计划',
                'url':'.home-season'
            },
            {
                'title':'年计划',
                'url':'.home-year'
            },
            {
                'title':'小金库',
                'url':'.home-coffer'
            }];
    }])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when("", "/home");
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "home.html",
                controller: 'homeController'
            })
            .state("home.home-month", {
                url:"/home-month",
                templateUrl: "home-month.html"
            })
            .state("home.home-season", {
                url:"/home-season",
                templateUrl: "home-season.html"
            })
            .state("home.home-year", {
                url:"/home-year",
                templateUrl: "home-year.html"
            })
            .state("home.home-coffer", {
                url:"/home-coffer",
                templateUrl: "home-coffer.html"
            })
            .state("user", {
                url: "/user",
                templateUrl: "user.html"
            });
        $urlRouterProvider.otherwise('/home');
    });