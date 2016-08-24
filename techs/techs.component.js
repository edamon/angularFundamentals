(function(module){
    'use strict';
    module.component('fountainTechs', {
        templateUrl: 'techs/techs.html',
        controller: TechsController
    });

    function TechsController($http) {
        var vm = this;

        $http
            .get('techs/techs.json')
            .then(function (response) {
                vm.techs = response.data;
            });
    }
})(angular.module('ngApp'));
  
