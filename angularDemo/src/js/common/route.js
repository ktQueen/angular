angular.module('ngRouteKitty', ['ngRoute'])
    .controller('HomeMonthController',['$scope','$route',function($scope, $route){
        $scope.$route = $route;
    }])
    .controller('HomeSeasonController',['$scope','$route',function($scope, $route){
        $scope.$route = $route;
    }])
    .controller('HomeYearController',['$scope','$route',function($scope, $route){
        $scope.$route = $route;
    }])
    .controller('HomeCofferController',['$scope','$route',function($scope, $route){
        $scope.$route = $route;
    }])
    .controller('UserController',['$scope','$route',function($scope, $route){
        $scope.$route = $route;
    }])
    .config(function ($routeProvider) {
        $routeProvider.
            when('/home_month', {
                templateUrl: 'home_month.html',
                controller: 'HomeMonthController'
            }).
            when('/home_season', {
                templateUrl: 'home_season.html',
                controller: 'HomeSeasonController'
            }).
            when('/home_year', {
                templateUrl: 'home_year.html',
                controller: 'HomeYearController'
            }).
            when('/home_coffer', {
                templateUrl: 'home_coffer.html',
                controller: 'HomeCofferController'
            }).
            when('/user', {
                templateUrl: 'user.html',
                controller: 'UserController'
            }).
            otherwise({
                redirectTo: '/home_month'
            });
    });