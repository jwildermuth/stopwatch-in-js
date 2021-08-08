// jshint esversion: 6

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
  s++;
  if (s == 60) {
    s = 0;
    m++;
  }

  if (m == 60) {
    m = 0;
    h++;
  }

  hours.innerHTML = clean(h, true);
  mins.innerHTML = clean(m, true);
  secs.innerHTML = clean(s);
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

function lapTime() {
  const lapNum = document.getElementById("laps").children.length + 1;
  const now = `${clean(h, true)}${clean(m, true)}${clean(s)}`;
  mark = `Lap ${lapNum}: ${now}`;
  const li = document.createElement('li');
  const txt = document.createTextNode(mark);
  li.appendChild(txt);
  document.getElementById('laps').appendChild(li);
}

function runTimer() {
  isRunning = setInterval(updateDisplay, 1000);
}
