(function(){
'use strict';
    angular.module('ngApp')  //declaring a module (includes [])
        .config(function(){
            console.log('parent config 1');
        })
        .config(function(){
            // ^ notice how we reference a module (without the array of dependencies)
            console.log('parent config 2');
        })
        .config(function ($provide) {
            $provide.decorator('greeting', function ($delegate) {
                return $delegate + ' World!';
            });
        });
})();
