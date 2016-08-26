(function(){
'use strict';
    angular.module('sn-time', ['sn-libs'])
        .service('TimeService', TimeService);

    function TimeService($interval, moment) {

        var self = this;

        self.currentTime = { time: moment().format('L LTS') };

        $interval(function () {
            self.currentTime.time = moment().format('L LTS');
            // we can't reassign the bound object, or the bindings won't update
            // with arrays, you can push new data to the original array,
            // or use angular.copy(newArray, svc.origArray);
            // https://docs.angularjs.org/api/ng/function/angular.copy
        },1000);

        this.getTime = function () {
            return self.currentTime;
        }
    }
})();
