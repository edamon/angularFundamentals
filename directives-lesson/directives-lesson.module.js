angular.module('sn-directives-lesson', [])
    .filter('reverse', function() {
        return function (text) {
            return text.split("").reverse().join("");
        };
    });
