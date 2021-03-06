(function(module){
'use strict';
    module.controller('Page2Ctrl', Page2Ctrl);

    function Page2Ctrl($filter, PeopleService, TimeService){
        // to inject a custom filter, add the word 'Filter' after the filter name
        var self = this;
        self.current = TimeService.currentTime;
        self.title = 'Built in Filters with ng-repeat';

        var people = PeopleService.getPeople();
        //use the $filter service in a controller
        self.people = $filter('limitTo')(people, 3);

        self.addPerson = function (first, last) {
            self.people.push({first: first, last: last});
        }
    }
})(angular.module('sn-directives-lesson'));
