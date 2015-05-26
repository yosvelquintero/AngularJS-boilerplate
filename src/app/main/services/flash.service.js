(function () {
    'use strict';

    angular
        .module('App')
        .factory('flashService', flashService);

    flashService.$inject = ['$rootScope'];

    /* @ngInject */
    function flashService($rootScope) {
        var service = {
            message: message
        };

        initService();

        return service;

        function initService() {
            $rootScope.$on('$locationChangeStart', function () {
                clearMessage();
            });

            /**
             * clearMessage
             * @return {Void} clean flash message
             */
            function clearMessage() {
                var flash = $rootScope.flash;
                if (flash) {
                    if (!flash.keepAfterLocationChange) {
                        delete $rootScope.flash;
                    } else {
                        // only keep for a single location change
                        flash.keepAfterLocationChange = false;
                    }
                }
            }
        }

        /**
         * message: Method to show flash messages
         * @param  {String} str                         content message
         * @param  {String} type                        can be: success, info, warning, error
         * @param  {Boolean} keepAfterLocationChange    keep after location change
         * @return {Obj}                                return the flash object
         */
        function message(str, type, keepAfterLocationChange) {
            $rootScope.flash = {
                message: str,
                type: type,
                keepAfterLocationChange: keepAfterLocationChange
            };
        }
    }

})();
