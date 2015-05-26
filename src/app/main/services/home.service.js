(function() {
    'use strict';

    angular
        .module('App')
        .factory('homeService', homeService);

    /**
     * homeService
     * @return {Obj}
     */
    function homeService() {

        return {
            getAwesomeThings: getAwesomeThings
        };

        ////////////

        /**
         * getAwesomeThings
         * @return {Array}
         */
        function getAwesomeThings() {
            return [{
                'title': 'AngularJS',
                'url': 'https://angularjs.org/',
                'description': 'HTML enhanced for web apps!',
                'logo': 'angular.png',
                'active': true
            }, {
                'title': 'BrowserSync',
                'url': 'http://browsersync.io/',
                'description': 'Time-saving synchronised browser testing.',
                'logo': 'browsersync.png',
                'active': true
            }, {
                'title': 'GulpJS',
                'url': 'http://gulpjs.com/',
                'description': 'The streaming build system.',
                'logo': 'gulp.png',
                'active': true
            }, {
                'title': 'Jasmine',
                'url': 'http://jasmine.github.io/',
                'description': 'Behavior-Driven JavaScript.',
                'logo': 'jasmine.png',
                'active': true
            }, {
                'title': 'Karma',
                'url': 'http://karma-runner.github.io/',
                'description': 'Spectacular Test Runner for JavaScript.',
                'logo': 'karma.png',
                'active': true
            }, {
                'title': 'Protractor',
                'url': 'https://github.com/angular/protractor',
                'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
                'logo': 'protractor.png',
                'active': true
            }, {
                'title': 'Bootstrap',
                'url': 'http://getbootstrap.com/',
                'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
                'logo': 'bootstrap.png',
                'active': true
            }, {
                'title': 'Angular Strap',
                'url': 'http://mgcrea.github.io/angular-strap/',
                'description': 'AngularJS 1.2+ native directives for Bootstrap 3.',
                'logo': 'angular-strap.png',
                'active': true
            }, {
                'title': 'Less',
                'url': 'http://lesscss.org/',
                'description': 'Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.',
                'logo': 'less.png',
                'active': true
            }, {
                'title': 'Restangular',
                'url': 'https://github.com/mgonto/restangular/',
                'description': 'AngularJS service to handle Rest API Restful Resources properly and easily',
                'logo': 'restangular.png',
                'active': true
            }, {
                'title': 'Lodash',
                'url': 'https://lodash.com/',
                'description': 'A JavaScript utility library delivering consistency, modularity, performance, & extras.',
                'logo': 'lodash.png',
                'active': true
            }];
        }
    }
})();
