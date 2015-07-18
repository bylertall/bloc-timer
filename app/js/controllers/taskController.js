(function() {
    'use strict';

    angular
        .module('app')
        .controller('TaskController', TaskController);

    function TaskController() {
        var vm = this;

        vm.taskListTitle = 'TASK LIST';
        vm.list = [];
        vm.task = '';
        vm.submit = submit;

        function submit() {
            if(vm.task) {
                vm.list.push(this.task);
                vm.task = '';
            }
        };

        return this;
    }
})();