(function(module){
'use strict';
    module.factory('techsFactory', techsFactory);

    function techsFactory($http) {
        return {
            getTechs: getTechs
        }

        function getTechs() {
            return $http
                .get('techs/techs.json')
                .then(function (response) {
                    return response.data;
                    //omg, returning raw json data to the controller?  LOLS!
                });
        }
    }
})(angular.module('sn-techs'));
