(function(module){
'use strict';
    module.controller('Page2Ctrl', Page2Ctrl);

    function Page2Ctrl(){
        var self = this;
        self.title = 'try adding duplicates, then check console error';
        self.people = [
            {
                first : 'Eric',
                last: 'Damon'
            },
            {
                first : 'Brad',
                last: 'Zepecki'
            }
        ];

        self.addPerson = function (person) {
            self.people.push(person);
        }
    }
})(angular.module('sn-directives-lesson'));
