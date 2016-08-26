angular.module('sn-childModule', [])
    .run(function($log){
        $log.debug('child run 1');
    })
    .run(function($log){
        $log.debug('child run 2');
    });
