(function () {
    'use strict';
    var modules = ['ngAnimate',
                   'sn-childModule',
                   'sn-directives-lesson',
                   'sn-custom-directives',
                   'sn-techs',
                   'sn-libs'];

    angular.module('ngApp', modules)
        .run(function($log){
            $log.debug('parent run 1');
        })
        .run(function(){
            console.log('parent run 2');

        })

        .value('greeting', 'Hello')
        .constant('PI', 3.14159265359)
        .controller('MainCtrl', MainController);

    function MainController(greeting, PI, moment) {
        var main = this;
        main.greeting = greeting;
        main.time = moment().format('L LT');
        main.activeTab = 1;

        main.activateTab = function (num) {
            main.activeTab = num;
        }
        
        main.calculateArea = function (radius) {
            main.area = PI * radius * radius;
        }

        throw "testing the exception handler";
    }
})();



