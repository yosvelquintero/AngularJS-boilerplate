(function() {
    'use strict';

    angular
        .module('App')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['loggerService', 'flashService', 'homeService'];

    /* @ngInject */
    function HomeController(loggerService, flashService, homeService) {
        var vm = this;

        loggerService.log('homeService', homeService);

        vm.awesomeThings = homeService.getAwesomeThings();

        ////////////
        activate();

        /**
         * [activate description]
         * @return {[Void]} [description]
         */
        function activate() {
            _.forEach(vm.awesomeThings, function(at) {
                at.rank = _.random(vm.awesomeThings.length + 100);
            });

            flashService.message('App loading was successfuly!!', 'success', true);
        }
    }
})();
