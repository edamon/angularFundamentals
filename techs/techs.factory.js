(function(module){
'use strict';
    module.factory('techsFactory', techsFactory);

    function techsFactory($http, techMapper, $q, $timeout, timeoutDelayService) {
        return {
            getTechs: getTechs
        };

        function getTechs() {
            var deferred = $q.defer();

            $http
                .get('techs/techs.json')
                .then(function (response) {
                    var time = response.config.responseTimestamp - response.config.requestTimestamp;
                    console.log('The request took ' + (time / 1000) + ' seconds.');
                    //return response.data;
                    //omg, returning raw json data to the controller?  LOLS!

                    var techs = [];
                    angular.forEach(response.data, function (t) {
                        techs.push(techMapper.map(t))
                    });

                    $timeout(function () {
                        deferred.resolve(techs);
                    }, timeoutDelayService.timeout);


                    // also see https://docs.angularjs.org/api/ng/service/$http
                    // You can specify a function in the transformResponse property
                    // of the $http config object
                });

            return deferred.promise;
        }
    }
})(angular.module('sn-techs'));
