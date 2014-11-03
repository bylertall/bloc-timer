blocTimer = angular.module('BlocTimer', ['ui.router']);

blocTimer.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {

  // MAIN
  $stateProvider.state('main', {
    url:'',
    controller: 'MainCtrl',
    /*COME BACK TO ADD VIEW FOR TASK LIST????*/
    views: {
      'timer': {
        templateUrl: 'assets/templates/timer.html'
      },
      'tasklist': {
        controller: 'TaskCtrl',
        templateUrl: 'assets/templates/tasklist.html'
      }
    }
  });
}]);

blocTimer.controller('MainCtrl', ['$scope', '$interval', function($scope, $interval) {
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
    alert('Countdown timer has completed!');
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
      });
    }
  }
});

blocTimer.filter('timecode', function() {
  return function(seconds) {
    seconds = Number.parseFloat(seconds);

    //returned when no time is provided
    if(Number.isNaN(seconds)) {
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