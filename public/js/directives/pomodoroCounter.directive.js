(function() {
    'use strict';

    angular
        .module('blocTimer')
        .directive('pomodoroCounter', pomodoroCounter);

    function pomodoroCounter () {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function(event) {
                    element.toggleClass('fill');
                }),

                $('li').bind('dblclick', function(event) {
                    $('li').removeClass('fill');
                })
            }
        }
    }

})();