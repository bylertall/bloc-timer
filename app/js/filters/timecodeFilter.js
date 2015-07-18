(function() {
    'use strict';

    angular
        .module('app')
        .filter('timecode', timecode);


    function timecode() {
        return function(seconds) {
            var wholeSeconds, 
                minutes, 
                remainingSeconds, 
                output,
                seconds = parseFloat(seconds);

            // return 0 time when no time is provided
            if(isNaN(seconds)) {
                return '00:00';
            }

            // make it a whole number
            wholeSeconds = Math.floor(seconds);
            minutes = Math.floor(wholeSeconds / 60);
            remainingSeconds = wholeSeconds % 60;

            // zero pad minutes
            if (minutes < 10) {
                output = '0' + minutes + ':';
            } else {
                output = minutes + ':';
            }

            // zero pad seconds
            if (remainingSeconds < 10) {
                output += '0';
            }

            output += remainingSeconds;

            return output;

        }

    }
})();