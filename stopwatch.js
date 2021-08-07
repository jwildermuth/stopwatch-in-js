let h = 0;
let m = 0;
let s = 0;
let isRunning = null;
let hours = document.getElementById('hour');
let mins = document.getElementById('min');
let secs = document.getElementById('sec');

window.onload = resetTimer();

function updateDisplay() {
  hours.innerHTML = h + ':';
  mins.innerHTML = m + ':';
  secs.innerHTML = s;
  console.log(h, m, s);
  s++;
  }

function resetTimer() {
  clearInterval(isRunning);
  h, m, s = 0;
  hours.innerHTML = '0:';
  mins.innerHTML = '0:';
  secs.innerHTML = '0';
}

function stopTimer() {
  clearInterval(isRunning);
}

function runTimer() {
  isRunning = setInterval(updateDisplay, 1000);
}

