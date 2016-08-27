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
        .config(function($provide, moment){
            $provide.decorator( '$log', [ '$delegate', function( $delegate )
            {
                var debugFn = $delegate.debug;

                function sendLogs( )
                {
                    var args    = [].slice.call(arguments);

                    //send the log to some external persistence
                    console.log(moment().toString() + ': do intercepty stuff: ', args);

                    // Call the original with the output prepended with formatted timestamp
                    debugFn.apply(null, args);

                };

                $delegate.debug = sendLogs;

                return $delegate;
            }]);

            $provide.decorator("$exceptionHandler", ['$delegate', function($delegate) {
                return function (exception, cause) {
                    console.log('enhanced exception handler firing...');
                    $delegate(exception, cause);
                }
            }])
        })
        .config(function ($provide) {
            $provide.decorator('greeting', function ($delegate) {
                return $delegate + ' World!';
            });
        })
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('timestampMarker');
        }]);
})();
