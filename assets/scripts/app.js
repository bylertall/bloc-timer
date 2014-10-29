//TIMER
var startTime;
var endTime;
var timer;
var currentMin;
var currentSec;
var minuteElem = document.getElementById('js-minute');
var secondElem = document.getElementById('js-second');
var diffInMs = endTime - startTime;
var diffInSecs = Math.round(diffInMs / 1000);
var amountOfMinutes = Math.floor(diffInSecs / 60);
var amountOfSeconds = diffInSecs % 60;

$('#work').click(function () {
  timeSelector(25);
});
$('#short').click(function () {
  timeSelector(5);
});
$('#long').click(function () {
  timeSelector(20);
});
$('#play-pause').click(function() {
  if(timer === null) {
    var dateNow = new Date();
    endTime.setMinutes(dateNow.getMinutes() + currentMin);
    endTime.setSeconds(dateNow.getSeconds() + currentSec);
    return timer = setInterval(countDown, 1000);
  }
  if(timer != null) {
    clearInterval(timer);
    timer = null;
    return currentMin = parseInt(document.getElementById('js-minute').innerHTML),
           currentSec = parseInt(document.getElementById('js-second').innerHTML);
  };
});

var timeSelector = function(time) {
  startTime = new Date();
  endTime = new Date();
  clearInterval(timer);
  timer = null;
  endTime.setMinutes(endTime.getMinutes() + time);
  document.getElementById('js-minute').innerHTML = time;
  document.getElementById('js-second').innerHTML = '00';

  return timer = setInterval(countDown, 1000);
}

function countDown() {
  var dateNow = new Date();

  //If not at the end of the timer, continue countdown
  if(endTime > dateNow) {
    //current countdown values
    var minutes = parseInt(document.getElementById('js-minute').innerHTML);
    var seconds = parseInt(document.getElementById('js-second').innerHTML);
    //update minute if needed
    if(seconds === 0) {
      if(minutes > 0) {
        --minutes;
        document.getElementById('js-minute').innerHTML = (minutes > 9) 
        ? minutes
        : '0' + minutes;
      }
      return document.getElementById('js-second').innerHTML = '59';
    } else {
      --seconds;
      document.getElementById('js-second').innerHTML = (seconds < 10) 
      ? '0' + seconds 
      : seconds;
    }
  } else {
    //reset seconds if time is up
    document.getElementById('js-second').innerHTML = '00';
    
    countDownOnComplete();
    clearInterval(timer);
    timer = null;
  }
}

function countDownOnComplete() {
  alert('Countdown timer has completed!');
}

//POMODORO COUNTERS
//Fill on single click
$('.pomodoro-counter').click(function() {
  $(this).toggleClass('fill');
});
//Unfill all on dbl click
$('.pomodoro-counter').dblclick(function() {
  $('.pomodoro-counter').removeClass('fill');
});

//TASK LIST
function addTask() {
  //only allow submit if a task has been entered
  if(document.getElementById('task-input').value != '') {
    var input = document.getElementById('task-input').value;
    var row = document.createElement('tr');
    var data = document.createElement('td');
    var textnode = document.createTextNode(input);
    row.appendChild(data);
    data.appendChild(textnode);
    document.getElementById('task-body').appendChild(row).appendChild(data);
    document.getElementById('task-input').value = '';
  } else {
    return false;
  }
}

//press enter in text input to submit
function submitTask() {
  if (event.keyCode == 13) {
    addTask();
    return false;
  }
};










