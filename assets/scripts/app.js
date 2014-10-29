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

$(document).ready(function() {
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