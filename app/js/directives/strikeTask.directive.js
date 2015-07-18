(function() {
    'use strict';

    angular
        .module('app')
        .directive('strikeTask', strikeTask);

    function strikeTask() {
        return function(scope, elem) {
                elem.bind('click', function() {
                    elem.toggleClass('strikethrough');
                });
        }
    }
})();