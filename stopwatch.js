let h = 0;
let m = 0;
let s = 0;
let isRunning = false;
let hours = document.getElementById('hour');
let mins = document.getElementById('min');
let secs = document.getElementById('sec');

window.onload = resetTimer();

function updateDisplay() {
  if (isRunning = true) {
    hours.innerHTML = h + ':';
    mins.innerHTML = m + ':';
    secs.innerHTML = s;
    console.log(h, m, s);
    s++;
  }
}

function resetTimer() {
  isRunning = false;
  hours.innerHTML = '00:';
  mins.innerHTML = '00:';
  secs.innerHTML = '00';
}

function stopTimer() {
  isRunning = false;
}

function runTimer() {
  isRunning = true;
  setInterval(() => updateDisplay(), 1000);
}

