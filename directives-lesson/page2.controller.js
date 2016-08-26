(function(module){
'use strict';
    module.controller('Page2Ctrl', Page2Ctrl);

    function Page2Ctrl($filter, reverseFilter){
        // to inject a custom filter, add the word 'Filter' after the filter name
        var self = this;
        self.title = 'Built in Filters with ng-repeat';
        //todo: apply the reverse filter in the controller instead of template
        //self.title = reverseFilter(self.title);
        var people = [
            {
                first : 'Eric',
                last: 'Damon'
            },
            {
                first : 'Brad',
                last: 'Zepecki'
            },
            {
                first : 'James',
                last: 'Newell'
            },
            {
                first : 'Justin',
                last: 'Bowers'
            }
        ];
        //use the $filter service in a controller
        self.people = $filter('limitTo')(people, 3);

        self.addPerson = function (first, last) {
            self.people.push({first: first, last: last});
        }
    }
})(angular.module('sn-directives-lesson'));
