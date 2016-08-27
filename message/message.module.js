(function(){
'use strict';
    var module = angular.module('sn-message', ['sn-libs']);
    module.service('MessageService', MessageService);

    function MessageService($rootScope, $interval, moment) {
        var self = this,
            intervalPromise = null;

        var messages = [
            {title: 'an event happened', time: moment().subtract(7, 'm').format('LTS')},
            {title: 'another event happened', time: moment().subtract(15, 'm').format('LTS')}];


        self.getEvents = function () {
            return messages;
        };

        self.subscribe = function () {
            //start interval to add more random events.
            intervalPromise = $interval(function () {
                $rootScope.$broadcast('message_received', {
                    title: events[Math.floor(Math.random()*events.length)],
                    time: moment().format('LTS')
                });
            }, 1200);
        };

        self.stop = function () {
            $interval.cancel(intervalPromise);
        }
    }

    var events = [
        'you got a text message',
        'you missed a call',
        'someone liked your post of Facebook',
        'someone liked a post you were tagged in on Facebook',
        'someone liked a post you were tagged in on Facebook',
        'someone liked a post you were tagged in on Facebook',
        'someone commented on a post you were tagged in on Facebook',
        'someone in the front tooted',
        'You received an invitation from a recruiter on LinkedIn',
        'You received an invitation from a recruiter on LinkedIn',
        'You received an invitation from a recruiter on LinkedIn',
        'You received an invitation from a recruiter on LinkedIn',
        'You received an invitation from a recruiter on LinkedIn'
    ];
})();
