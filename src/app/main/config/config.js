(function() {

    'use strict';

    angular
        .module('App')
        .constant('config', {
            'app_name': 'App',
            'debug': true,
            'api_url': 'http://www.yourAPIurl.com/'
        });

})();
