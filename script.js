const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let startTime = 0;
let elapsedTime = 0;
let intervalId;

function updateDisplay() {
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = Math.floor(elapsedTime % 1000 / 10);

  display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
}

function startStopwatch() {
  startTime = Date.now() - elapsedTime;
  intervalId = setInterval(updateTimer, 10);
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;
}

function stopStopwatch() {
  clearInterval(intervalId);
  elapsedTime = Date.now() - startTime;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function resetStopwatch() {
  clearInterval(intervalId);
  startTime = 0;
  elapsedTime = 0;
  updateDisplay();
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  updateDisplay();
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
