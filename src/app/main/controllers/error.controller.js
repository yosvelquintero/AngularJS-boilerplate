(function() {
    'use strict';

    angular
        .module('App')
        .controller('ErrorController', ErrorController);

    ErrorController.$inject = ['$rootScope'];

    /* @ngInject */
    function ErrorController($rootScope) {
        $rootScope.title = '404 http not found';
    }
})();
