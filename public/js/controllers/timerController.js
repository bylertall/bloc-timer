(function () {
    'use strict';

    angular
        .module('blocTimer')
        .controller('TimerController', TimerController);

    TimerController.$inject = ['$interval'];

    function TimerController($interval) {
        var vm = this;
        var timerSet = null;

        vm.counter = 25 * 60;
        vm.timerSelector = timerSelector;
        vm.timerToggle = timerToggle;
        vm.onComplete = onComplete;
        

        function countdown() {
            if (vm.counter != 0) {
                vm.counter--;
            } else {
                vm.onComplete();
                $interval.cancel(timerSet);
            }
        };

        function timerSelector(time) {
            $interval.cancel(timerSet);
            //counter time converted to seconds
            vm.counter = time * 60;

            timerSet = $interval(countdown, 1000);
        };

        function timerToggle() {
            if(timerSet != null) {
                $interval.cancel(timerSet);
                timerSet = null;
            } else {
                vm.timerSelector(vm.counter / 60);
            }
        };
        
        function onComplete() {
            document.getElementById('alertSound').play();
            alert('Countdown timer has completed!');
        };

        return this;
    }
})();