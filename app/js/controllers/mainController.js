(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['$modal'];

    function MainController($modal) {
        var vm = this;
        
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