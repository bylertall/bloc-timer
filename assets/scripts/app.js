var startTime = new Date();
var endTime = new Date();
var minuteElem = document.getElementById('js-minute');
var secondElem = document.getElementById('js-second');
var timer;

var diffInMs = endTime - startTime;
var diffInSecs = Math.round(diffInMs / 1000);
var amountOfMinutes = Math.floor(diffInSecs / 60);
var amountOfSeconds = diffInSecs % 60;


$(document).ready(function() {
  $('#work').click(function() {
    clearInterval(timer);
    timer = null;
    endTime.setMinutes(endTime.getMinutes() + 25);
    document.getElementById('js-minute').innerHTML = '25:';
    document.getElementById('js-second').innerHTML = '00';
    return timer = setInterval(countDown, 1000);
  });
  $('#short').click(function() {
    clearInterval(timer);
    timer = null;
    endTime.setMinutes(endTime.getMinutes() + 5);
    document.getElementById('js-minute').innerHTML = '5:';
    document.getElementById('js-second').innerHTML = '00';
    return timer = setInterval(countDown, 1000);
  });
  $('#long').click(function() {
    clearInterval(timer);
    timer = null;
    endTime.setMinutes(endTime.getMinutes() + 20);
    document.getElementById('js-minute').innerHTML = '20:';
    document.getElementById('js-second').innerHTML = '00';
    return timer = setInterval(countDown, 1000);
  });

  if(amountOfMinutes > 0) {
  document.getElementById('js-minute').innerHTML = (amountOfMinutes < 10) ? '0' + amountOfMinutes + ':' : amountOfMinutes + ':';
  }
  if(amountOfSeconds > 0) {
    document.getElementById('js-second').innerHTML = (amountOfSeconds < 10) ? '0' + amountOfSeconds : amountOfSeconds;
  } else {
    document.getElementById('js-second').innerHTML = '00';
  }
});

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
        minutes--;
        document.getElementById('js-minute').innerHTML = (minutes > 10) 
        ? minutes + ':' 
        : '0' + minutes + ':';
      }
      return document.getElementById('js-second').innerHTML = '59';
    } else {
      seconds--;
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