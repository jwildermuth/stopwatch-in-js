// jshint esversion: 6

let h = m = s = 0;
let isRunning = null;
const hours = document.getElementById('hour');
const mins = document.getElementById('min');
const secs = document.getElementById('sec');
const laplist = document.getElementById("laps");

window.onload = resetTimer();

// Return a 2 digit string (eg '06:' for hr/min OR '06' for sec)
function clean(n, colon = false) {
  n = n.toLocaleString('en-US', {minimumIntegerDigits: 2});
  return colon ? n + ':' : n;
}

// Main timer function while running
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

function clearLaps() {
  let theLaps = document.querySelectorAll("li");
  theLaps.forEach(function (e) {
    e.remove();
  });
}

function resetTimer() {
  clearInterval(isRunning);
  h = m = s = 0;
  hours.innerHTML = clean(h, true);
  mins.innerHTML = clean(m, true);
  secs.innerHTML = clean(s);
  clearLaps();
}

function stopTimer() {
  clearInterval(isRunning);
  isRunning = null;
}

// Add a lap time to the list
function lapTime() {
  const lapNum = laplist.children.length + 1;
  const now = `${clean(h, true)}${clean(m, true)}${clean(s)}`;
  mark = `Lap ${lapNum}: ${now}`;
  const li = document.createElement('li');
  const txt = document.createTextNode(mark);
  li.appendChild(txt);
  document.getElementById('laps').appendChild(li);
}

// Start the timer using a setInterval
function runTimer() {
  if (!isRunning) {
    isRunning = setInterval(updateDisplay, 1000);
  }
}
