(function() {
    angular
        .module('blocTimer')
        .config(configure);

    configure.$inject = ['$stateProvider', '$locationProvider'];


    function configure($stateProvider, $locationProvider) {
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