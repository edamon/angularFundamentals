(function(mod){
'use strict';
    function svgIcon($templateCache) {
        // Directive functions return an object literal that contain all the properties and methods
        // used by the directive
        // the are all listed here: https://docs.angularjs.org/api/ng/service/$compile
        return {
            restrict: 'E',       //E = element, A = attribute, C = class, M = comment
            link: function (scope, element, attrs) {
                //the link function fires after the template is compiled by the $compile service
                console.log('check in the template cache');
                console.log($templateCache.get(attrs.id + '.svg'));
            },
            templateUrl : function (element, attrs) {
                // templateUrl can be a relative path to a file, or a function.
                return attrs.id + '.svg';
            }
        };
    }
    mod.directive('svgIcon', svgIcon);
})(angular.module('ngApp'));
