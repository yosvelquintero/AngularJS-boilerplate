(function() {
    'use strict';

    angular
        .module('App')
        .service('loggerService', loggerService);

    loggerService.$inject = ['$log', 'config'];

    /* @ngInject */
    function loggerService($log, config) {
        return {
            error: error,
            info: info,
            log: log
        };

        ////////////

        /**
         * [error description]
         * @param  {[type]} message [description]
         * @param  {[type]} data    [description]
         * @return {[type]}         [description]
         */
        function error(message, data) {
            if (config.debug) {
                $log.error('Error: ' + message, data);
            }
        }

        /**
         * [info description]
         * @param  {[type]} message [description]
         * @param  {[type]} data    [description]
         * @return {[type]}         [description]
         */
        function info(message, data) {
            if (config.debug) {
                $log.info('Info: ' + message, data);
            }
        }

        /**
         * [log description]
         * @param  {[type]} message [description]
         * @param  {[type]} data    [description]
         * @return {[type]}         [description]
         */
        function log(message, data) {
            if (config.debug) {
                $log.log('Log: ' + message, data);
            }
        }
    }
})();
