let h = 0;
let m = 0;
let s = 0;
let isRunning = null;
let hours = document.getElementById('hour');
let mins = document.getElementById('min');
let secs = document.getElementById('sec');

window.onload = resetTimer();

function clean(n, colon = false) {
  n = n.toLocaleString('en-US', {minimumIntegerDigits: 2});
  return colon ? n + ':' : n;
}

function updateDisplay() {
  if (s == 60) {
    m++;
    s = 0;
  }

  if (m == 60) {
    h++;
    m = 0;
  }

  hours.innerHTML = clean(h, true);
  mins.innerHTML = clean(m, true);
  secs.innerHTML = clean(s);
  s++;
}

function resetTimer() {
  clearInterval(isRunning);
  h = m = s = 0;
  hours.innerHTML = clean(h, true);
  mins.innerHTML = clean(m, true);
  secs.innerHTML = clean(s);
}

function stopTimer() {
  clearInterval(isRunning);
}

function runTimer() {
  s = 1;
  isRunning = setInterval(updateDisplay, 1000);
}
