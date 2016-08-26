(function(module){
    'use strict';
    module.component('fountainTechs', {
        templateUrl: 'techs/techs.html',
        controller: TechsController
    });

    function TechsController(techsFactory) {
        var vm = this;

        techsFactory.getTechs().then(function (data) {
            vm.techs = data;
        });
    }
})(angular.module('sn-techs'));
  
