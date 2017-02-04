var app=angular.module('uiRouterKitty', ['ui.router']);
app .controller('homeController',['$scope','$rootScope',function($scope,$rootScope){
        $rootScope.title='kitty';
        $scope.tab=[
            {
                'title':'月计划',
                'url':'home.home-month'
            },
            {
                'title':'季计划',
                'url':'home.home-season'
            },
            {
                'title':'年计划',
                'url':'home.home-year'
            },
            {
                'title':'小金库',
                'url':'home.home-coffer'
            }];
        $rootScope.num={'month':'12','season':'17','year':'30','coffer':"55"}
        $rootScope.canMoney={'month':'1200','season':'1700','year':'2000','coffer':"1500"}
        $rootScope.rate={'month':'4','season':'3','year':'2','coffer':"1"}
        $scope.load = function (key){
            var num=0;
            if(key=='1')num=$rootScope.num.month;
            if(key=='2')num=$rootScope.num.season;
            if(key=='3')num=$rootScope.num.year;
            if(key=='4')num=$rootScope.num.coffer;
            var circle1 = document.querySelectorAll("circle")[1],
                circle2 = document.querySelectorAll("circle")[2];
            var percent = num / 200, perimeter = Math.PI * 2 * 100;
            circle1.setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter * (1- percent));
            circle2.setAttribute('stroke-dasharray', perimeter * percent + " " + perimeter * (1- percent));
        }
    }])
    .controller('homeDetailController',['$scope','$rootScope',function($scope,$rootScope){
        $rootScope.title='详情';
        $rootScope.num={'month':'12','season':'17','year':'20','coffer':"15"}
        $rootScope.canMoney={'month':'1200','season':'1700','year':'2000','coffer':"1500"}
        $rootScope.rate={'month':'4','season':'3','year':'2','coffer':"1"}
    }])
    .controller('userController',['$scope','$rootScope',function($scope,$rootScope){
        $rootScope.title='账户';
        $scope.allMoney="99999";
        $scope .remainMoney='500';
        $scope.phone='153****3258';

    }])
    .controller('redPackController',['$scope','$rootScope',function($scope,$rootScope){
        $rootScope.title='主人红包';
    }])
    .controller('investPackController',['$scope','$rootScope',function($scope,$rootScope){
        $rootScope.title='投资';
    }])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when("", "/home/home-month");
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
            .state("home-month-detail", {
                url:"/home-month-detail",
                templateUrl: "home-month-detail.html",
                controller: 'homeDetailController'
            })
            .state("home.home-season", {
                url:"/home-season",
                templateUrl: "home-season.html"
            })
            .state("home-season-detail", {
                url:"/home-season-detail",
                templateUrl: "home-season-detail.html",
                controller: 'homeDetailController'
            })
            .state("home.home-year", {
                url:"/home-year",
                templateUrl: "home-year.html"
            })
            .state("home-year-detail", {
                url:"/home-year-detail",
                templateUrl: "home-year-detail.html",
                controller: 'homeDetailController'
            })
            .state("home.home-coffer", {
                url:"/home-coffer",
                templateUrl: "home-coffer.html"
            })
            .state("home-coffer-detail", {
                url:"/home-coffer-detail",
                templateUrl: "home-coffer-detail.html",
                controller: 'homeDetailController'
            })
            .state("user", {
                url: "/user",
                templateUrl: "user.html",
                controller: 'userController'
            })
            .state("red-pack", {
                url: "/red-pack",
                templateUrl: "red-pack.html",
                controller: 'redPackController'
            })
            .state("invest", {
                url: "/invest",
                templateUrl: "invest.html",
                controller: 'investPackController'
            });
        $urlRouterProvider.otherwise('/home/home-month');
    });