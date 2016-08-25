(function(module){
'use strict';
    module.controller('DirectiveController', DirectiveController);

    function DirectiveController($timeout) {
        var dr = this;
        dr.loadingThing = true;
        dr.loading2 = true;
        dr.toggleLoading = function(){
            dr.loadingThing = !dr.loadingThing;
            $timeout(function(){dr.loading2 = !dr.loading2}, 2000);
        }
    }
})(angular.module('sn-custom-directives'));
