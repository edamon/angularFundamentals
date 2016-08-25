angular.module('sn-childModule', [])
    .run(function($log){
        $log.warn('child run 1');
    })
    .run(function($log){
        $log.warn('child run 2');
    });
