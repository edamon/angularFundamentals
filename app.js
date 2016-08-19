'use strict';
var app = angular.module('ngApp', ['childModule']);  //declaring a module (includes [])
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
    function MainController($log) {
                            // ^^ dependency injection
        //var main = this;          // this does not have to be the same as the alias in the template
        this.name = 'World';
        $log.error('main ctrl');
        this.clickAction = function (message) {
            showAlert();

            function showAlert() {
                alert('message: ' + this.name);     // closure, this.name is undefined, use main
            }
        }
    }

    mod.controller('MainCtrl', MainController);
})(angular.module('ngApp'));

////////////////////////////////////////////

angular.module('childModule', [])
    .config(function(){
        console.log('child config 1');
    })
    .run(function($log){
        $log.warn('child run 1');
    })
    .config(function(){
        console.log('child config 2');
    })
    .run(function($log){
        $log.warn('child run 2');
    });
