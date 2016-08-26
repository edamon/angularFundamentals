(function(){
'use strict';
    angular.module('ngApp')  //declaring a module (includes [])
        .provider("timeoutDelayService", function () {
            var to;
            return {
                setTimeout: function (value) {
                    to = value;
                },
                $get: function () {
                    // you could inject http in here to get config data
                    // but you'll be generating a config module/constant
                    // using a grunt/gulp build process
                    return {
                        timeout: to
                    };
                }
            };
        })
        .config(function(timeoutDelayServiceProvider){
            console.log('parent config 1');

            timeoutDelayServiceProvider.setTimeout(5000);

            // since you can also inject constants in here, you could use
            // the constant data to configure a service
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
