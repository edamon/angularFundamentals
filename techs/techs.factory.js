(function(module){
'use strict';
    module.factory('techsFactory', techsFactory);

    function techsFactory($http, techMapper) {
        return {
            getTechs: getTechs
        };

        function getTechs() {
            return $http
                .get('techs/techs.json')
                .then(function (response) {
                    //return response.data;
                    //omg, returning raw json data to the controller?  LOLS!

                    var techs = [];
                    angular.forEach(response.data, function (t) {
                        techs.push(techMapper.map(t))
                    });
                    return techs;
                });
        }
    }
})(angular.module('sn-techs'));
