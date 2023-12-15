let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let displayHours = hours;
let displayMinutes = minutes;
let displaySeconds = seconds;
let displayMiliseconds = miliseconds;

let displayStatus = "stopped";

let interval = null;
let lapNow = null;

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const hrsDisplay = document.getElementById("timerHrs");
const minDisplay = document.getElementById("timerMin");
const secDisplay = document.getElementById("timerSec");
const milisecDisplay = document.getElementById("timerMilisec");

const start = () => {
  miliseconds++;

  if (miliseconds / 100 === 1) {
    miliseconds = 0;
    seconds++;

    if (seconds / 60 === 1) {
      seconds = 0;
      minutes++;

      if (minutes / 60 === 1) {
        minutes = 0;
        hours++;
      }
    }
  }

  if (miliseconds < 10) {
    displayMiliseconds = "0" + miliseconds.toString();
  } else {
    displayMiliseconds = miliseconds;
  }

  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  }

  hrsDisplay.innerHTML = displayHours;
  minDisplay.innerHTML = displayMinutes;
  secDisplay.innerHTML = displaySeconds;
  milisecDisplay.innerHTML = displayMiliseconds;
};

startBtn.addEventListener("click", () => {
  if (displayStatus === "stopped") {
    interval = window.setInterval(start, 10);
    displayStatus = "started";
    startBtn.innerHTML = "STOP";
    start();
  } else {
    window.clearInterval(interval);
    displayStatus = "stopped";
    startBtn.innerHTML = "START";
  }
});

resetBtn.addEventListener("click", () => {
  window.clearInterval(interval);
  hours = 0;
  minutes = 0;
  seconds = 0;
  miliseconds = 0;
  hrsDisplay.innerHTML = "00";
  minDisplay.innerHTML = "00";
  secDisplay.innerHTML = "00";
  milisecDisplay.innerHTML = "00";
  displayStatus = "stopped";
  startBtn.innerHTML = "START";
  const lapList = document.getElementById("lapRecord");
  lapList.innerHTML = "";
});

lapBtn.addEventListener("click", () => {
  if (displayStatus === "started") {
    lapNow = `${displayHours}:${displayMinutes}:${displaySeconds}.${displayMiliseconds}`;
    const lapList = document.getElementById("lapRecord");
    const li = document.createElement("li");
    li.innerHTML = lapNow;
    lapList.appendChild(li);
  }
});
