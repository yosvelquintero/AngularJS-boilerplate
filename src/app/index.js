(function() {
    'use strict';

    angular
        .module('App', [
            'ngAnimate',
            'ngCookies',
            'ngTouch',
            'ngSanitize',
            'ngRoute',
            'restangular',
            'mgcrea.ngStrap'
        ]);


    ////////////////
    // blockConfig
    angular
        .module('App')
        .config(blockConfig);

    blockConfig.$inject = ['$routeProvider', '$locationProvider'];

    /* @ngInject */
    function blockConfig($routeProvider, $locationProvider) {
        config();

        ////////////////

        function config() {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    title: 'Home',
                    templateUrl: 'app/main/views/home/index_view.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })
                .when('/about', {
                    title: 'About',
                    templateUrl: 'app/main/views/about/index_view.html',
                    controller: 'AboutController',
                    controllerAs: 'vm'
                })
                .otherwise({
                    // redirectTo: '/404'
                    title: '404 http not found',
                    templateUrl: 'app/main/views/errors/404_view.html',
                    controller: 'ErrorController',
                    controllerAs: 'vm'
                });
        }
    }


    ////////////////
    // blockRun
    angular
        .module('App')
        .run(blockRun);

    blockRun.$inject = ['$location', '$rootScope'];

    /* @ngInject */
    function blockRun($location, $rootScope) {
        run();

        ////////////////

        function run() {
            $rootScope.$on('$routeChangeSuccess', function(event, current) {
                $rootScope.title = angular.isDefined(current.$$route) && current.$$route.title;
            });
        }
    }
})();
