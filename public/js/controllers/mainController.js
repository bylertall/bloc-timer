(function() {
    'use strict';

    angular
        .module('blocTimer')
        .controller('MainController', MainController);

    MainController.$inject = ['$interval', '$modal'];

    function MainController($interval, $modal) {
        var vm = this;
        var timerSet = null;
        
        vm.title = 'Bloc Timer';
        vm.openHelp = openHelp;

        // help modal
        function openHelp() {
            var modalInstance = $modal.open({
                templateUrl: './views/help.html',
                size: 'lg',
            });
        };

        return this;
    }
})();