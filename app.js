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
    mod.controller('MainCtrl', MainController);
    mod.controller('AnotherCtrl', AnotherCtrl);
    mod.controller('YetAnotherCtrl', YetAnotherCtrl);
    
    function MainController() {
        var main = this;
        main.title = 'A New Hope';
    }
    
    function AnotherCtrl() {
        var an = this;
        an.title = 'The Empire Strikes Back';
    }
    
    function YetAnotherCtrl() {
        var yet = this;
        yet.title = 'Return of the Jedi';
    }

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
