(function() {
    'use strict';

    angular
        .module('App')
        .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$location'];

    /* @ngInject */
    function NavbarController($location) {
        var vm = this;

        vm.$location = $location;
        vm.isActive = isActive;

        ////////////

        function isActive(item) {
            if (item === $location.path()) {
                return true;
            }

            return false;
        }
    }
})();
