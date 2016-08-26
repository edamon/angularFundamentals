(function(module){
'use strict';
    module.service('PeopleService', PeopleService);

    function PeopleService() {
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


        this.getPeople = function () {
            return people;
        }
    }

})(angular.module('sn-directives-lesson'));
