(function(module){
'use strict';
    module.controller('HomeCtrl', HomeController);

    function HomeController($rootScope, MessageService) {
        var vm = this;
        vm.messages = [];

        vm.subScribe = function () {
            vm.messages = MessageService.getEvents();

            MessageService.subscribe();
            $rootScope.$on('message_received', function (event, message) {
                vm.messages.push(message);
            });
        };

        vm.stop = MessageService.stop;
    }
})(angular.module('sn-home'));
