(function() {
    'use strict';

    angular
        .module('blocTimer')
        .directive('strikeTask', strikeTask);

    function strikeTask() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('click', function(event) {
                    element.toggleClass('strikethrough');
                })
            }
        }
    }
})();