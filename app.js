(function () {
    'use strict';
    var modules = ['ngAnimate',
                   'sn-childModule',
                   'sn-directives-lesson',
                   'sn-custom-directives',
                   'sn-techs'];

    angular.module('ngApp', modules)
        .run(function($log){
            $log.warn('parent run 1');
        })
        .run(function($log){
            $log.warn('parent run 2');
        })
        .controller('MainCtrl', MainController);

    function MainController() {
        var main = this;
        main.title = 'A New Hope';
        main.activeTab = 1;

        main.activateTab = function (num) {
            main.activeTab = num;
        }
    }
})();



