(function() {
    'use strict';

    angular
        .module('ngApp')
        .config(routerConfig);

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home/home.html',
                resolve: {
                    //https://github.com/angular-ui/ui-router/wiki#resolve
                }/*,
                 controller: 'HomeCtrl',
                 controllerAs: 'home',
                 */
            })
            .state('page1', {
                url: '/directives1',
                templateUrl: 'directives-lesson/page1.html'/*,
                 controller: 'HomeCtrl',
                 controllerAs: 'home'*/
            })
            .state('page2', {
                url: '/directives2',
                templateUrl: 'directives-lesson/page2.html'/*,
                 controller: 'HomeCtrl',
                 controllerAs: 'home'*/
            })
            .state('directives', {
                url: '/custom-directives',
                templateUrl: 'custom-directives/directives.html'/*,
                 controller: 'HomeCtrl',
                 controllerAs: 'home'*/
            })
            .state('components', {
                url: '/components',
                templateUrl: 'techs/components.html'/*,
                 controller: 'HomeCtrl',
                 controllerAs: 'home'*/
            });

        $urlRouterProvider.otherwise('/');
    }

})();
