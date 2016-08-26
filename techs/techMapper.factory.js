(function(module){
'use strict';
    module.factory('techMapper', techMapper);

    function techMapper() {
        return{
            map: map
        }

        function map(tech) {
            return {
                key: tech.key,
                title: tech.title,
                logo: tech.logo,
                text1: tech.text1,
                text2: tech.text2
            }
        }
    }
})(angular.module('sn-techs'));
