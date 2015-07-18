(function() {
    angular
        .module('app')
        .config(configure);

    configure.$inject = ['$stateProvider'];


    function configure($stateProvider) {
        $stateProvider
            .state('main', {
                url:'',
                controller: 'MainController as main',
                views: {
                    'timer': {
                        controller: 'TimerController as timer',
                        templateUrl: '/views/timer.html'
                    },
                    'tasklist': {
                        controller: 'TaskController as task',
                        templateUrl: '/views/tasklist.html'
                    }
                }
        });
    }
})();