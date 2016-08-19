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
    function MainController($scope, $log) {
                            // ^^ dependency injection
        $scope.name = 'World';
        $log.error('main ctrl');
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
