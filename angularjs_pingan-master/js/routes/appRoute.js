/**
 * 路由
 */
define(['app'], function(app){
  
   return app.config(['$routeProvider',function($routeProvider) {
            $routeProvider
              .when('/', {
                templateUrl: 'GitHub/angular-grunt-less/angularjs_pingan-master/js/views/wd/list.html',
                controller: 'wdListCtrl'
              })
              .when('/wdxq', {
                templateUrl: 'GitHub/angular-grunt-less/angularjs_pingan-master/js/views/wd/xq.html',
                controller: 'wdxqCtrl'
              })
              .when('/sh', {
                templateUrl: 'GitHub/angular-grunt-less/angularjs_pingan-master/js/views/sh/list.html',
                controller: 'shListCtrl'
              })
              .when('/shxq', {
                templateUrl: 'GitHub/angular-grunt-less/angularjs_pingan-master/js/views/sh/xq.html',
                controller: 'shxqCtrl'
              })
              .when('/listimg', {
                templateUrl: 'GitHub/angular-grunt-less/angularjs_pingan-master/js/views/sh/listimg.html',
                controller: 'listimgCtrl'
              })
              .when('/jr', {
                templateUrl: 'GitHub/angular-grunt-less/angularjs_pingan-master/js/views/jr/list.html',
                controller: 'jrListCtrl'
              })
              .when('/lcxq', {
                templateUrl: 'GitHub/angular-grunt-less/angularjs_pingan-master/js/views/jr/lcxq.html',
                controller: 'lcxqCtrl'
              })
              .when('/jjxq', {
                templateUrl: 'GitHub/angular-grunt-less/angularjs_pingan-master/js/views/jr/jjxq.html',
                controller: 'jjxqCtrl'
              })
              .otherwise({ redirectTo: '/' });

              //$locationProvider.html5Mode(true).hashPrefix('!');

   }])
   
  
})