(function() {
    'use strict';

    angular
        .module('app')
        .directive('pomodoroCounter', pomodoroCounter);

    function pomodoroCounter () {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                elem.bind('click', function(event) {
                    elem.toggleClass('fill');
                }),

                $('li').bind('dblclick', function(event) {
                    $('li').removeClass('fill');
                })
            }
        }
    }

})();