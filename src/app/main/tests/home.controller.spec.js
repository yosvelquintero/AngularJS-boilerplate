(function() {
    'use strict';

    describe('Testing controllers: HomeController', function() {
        var HomeController;

        beforeEach(module('App'));

        beforeEach(inject(function($controller) {
            HomeController = $controller('HomeController', {});
        }));

        it('should have model defined as HomeController', function() {
            expect(HomeController).toBeDefined();
        });

        it('should not have a property called vm', function() {
            expect(HomeController.vm).toBeUndefined();
        });

        it('should have awesomeThings defined wich is an array', function() {
            expect(HomeController.awesomeThings).toBeDefined();
            expect(angular.isArray(HomeController.awesomeThings)).toBeTruthy();
        });

        it('awesomeThings should define more than 5 awesome things', function() {
            expect(HomeController.awesomeThings).toBeDefined();
            expect(HomeController.awesomeThings.length > 5).toBeTruthy();
        });
    });
})();
