'use strict';
var modules = ['ngAnimate',
               'sn-childModule',
               'sn-custom-directives',
               'sn-techs'];

var app = angular.module('ngApp', modules);  //declaring a module (includes [])
app.config(function(){
        console.log('parent config 1');
    });

angular.module('ngApp').config(function(){
        // ^ notice how we reference a module (without the array of dependencies)
        console.log('parent config 2');
    })
    .run(function($log){
        // ^ you can also chain these blocks (or anything you attach to a module)
        $log.warn('parent run 1');
    })
    .run(function($log){
        $log.warn('parent run 2');
    });

///////////////////////////////////////////

(function (mod) {
    mod.controller('MainCtrl', MainController);
    mod.controller('Page2Ctrl', Page2Ctrl);

    function MainController() {
        var main = this;
        main.title = 'A New Hope';
        main.activeTab = 1;

        main.activateTab = function (num) {
            main.activeTab = num;
        }
    }

    function Page2Ctrl(){
        var self = this;
        self.title = 'try adding duplicates, then check console error';
        self.people = [
            {
                first : 'Eric',
                last: 'Damon'
            },
            {
                first : 'Brad',
                last: 'Zepecki'
            }
        ];

        self.addPerson = function (person) {
            self.people.push(person);
        }
    }

})(angular.module('ngApp'));

////////////////////////////////////////////


