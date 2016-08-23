(function(mod){
'use strict';
    mod.directive('loadingIndicator', loadingIndicator);

    function loadingIndicator() {
        return {
            restrict: 'A',
            replace: true,
            transclude: true,
            scope: {
                loading: '=loadingIndicator',
                toggle:  '&'
            },
            bindToController: true,
                //as of 1.4.x we can swap bindToController with scope (just set scope: true)
            template: ['<div class="loading-indicator-wrapper">',
                       '    <div>am I loading? {{ldCtrl.loading}}</div>',
                       '    <div ng-show="ldCtrl.loading" class="loading"></div>',
                       '    <div ng-hide="ldCtrl.loading" ng-transclude></div>',
                       '    <div><button class="btn btn-primary" ng-click="ldCtrl.toggle()">Press me!</button> </div>',
                       '</div>',].join(''),
            link: function($scope, $element, $attrs) {
                console.log('ldCtrl linker function')
                // executes after DOM is compiled
            },
            controllerAs: 'ldCtrl',

            controller: function () {
                console.log('ldCtrl controller function')
            }
        };

    }
})(angular.module('ngApp'));
