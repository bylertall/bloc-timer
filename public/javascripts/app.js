blocTimer = angular.module('BlocTimer', ['ui.router', 'ui.sortable', 'ui.bootstrap']);

blocTimer.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {

  // MAIN
  $stateProvider.state('main', {
    url:'',
    controller: 'TimerCtrl',
    /*COME BACK TO ADD VIEW FOR TASK LIST????*/
    views: {
      'timer': {
        templateUrl: 'timer.html'
      },
      'tasklist': {
        controller: 'TaskCtrl',
        templateUrl: 'tasklist.html'
      }
    }
  });
}]);

blocTimer.controller('TimerCtrl', ['$scope', '$interval', '$modal', function($scope, $interval, $modal) {
  $scope.title = 'BLOC TIMER';
  $scope.counter = 25 * 60;
  $scope.timerSet = null;

  $scope.countdown = function() {
    if ($scope.counter != 0) {
      $scope.counter--;
    } else {
      $scope.onComplete();
      $interval.cancel($scope.timerSet);
    }
  };
  $scope.timerSelector = function(time) {
    $interval.cancel($scope.timerSet);
    //counter time converted to seconds
    $scope.counter = time * 60;

    $scope.timerSet = $interval($scope.countdown, 1000);
  };
  $scope.timerToggle = function() {
    if($scope.timerSet != null) {
      $interval.cancel($scope.timerSet);
      $scope.timerSet = null;
    } else {
      $scope.timerSelector($scope.counter / 60);
    }
  };
  $scope.onComplete = function() {
    document.getElementById('alertSound').play();
    alert('Countdown timer has completed!');
  };
  $scope.open = function() {
    var modalInstance = $modal.open({
      templateUrl: 'help.html',
      size: 'lg',
    });
  };
}]);

blocTimer.controller('TaskCtrl', ['$scope', function($scope) {
  $scope.taskTitle = 'TASK LIST';
  $scope.list = [];
  $scope.task;
  $scope.submit = function() {
    if($scope.task) {
      $scope.list.push(this.task);
      $scope.task = '';
    }
  };
}]);

blocTimer.directive('taskItem', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('click', function(event) {
        element.toggleClass('strikethrough');
      })
    }
  }
});

blocTimer.directive('pomodoroCounter', function() {
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
});

blocTimer.filter('timecode', function() {
  return function(seconds) {
    seconds = parseFloat(seconds);

    //returned when no time is provided
    if(isNaN(seconds)) {
      return '00:00';
    }

    //make it a whole number
    var wholeSeconds = Math.floor(seconds);

    var minutes = Math.floor(wholeSeconds / 60);

    remainingSeconds = wholeSeconds % 60;

    if (minutes < 10) {
      var output = '0' + minutes + ':';
    } else {
      output = minutes + ':';
    }

    //zero pad seconds, so 9 seconds should be :09
    if(remainingSeconds < 10) {
      output += '0';
    }

    output += remainingSeconds;

    return output;
  }
});