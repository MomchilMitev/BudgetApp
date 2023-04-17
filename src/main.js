const pomodoroMinutes = 20;
let interval = null;
let remainingSeconds = pomodoroMinutes * 60;
const pomodoroCounter = document.querySelector('.pomodoro__counter');
const pomodoroTime = document.querySelector('.pomodoro__minutes');
const pomodoroAction = document.querySelector('.pomodoro__action');

function start() {
  if (remainingSeconds === 0) return;

  interval = setInterval(() => {
    remainingSeconds--;
    updateTime();

    if (remainingSeconds === 0) {
      stop();
    }
  }, 1000);

  updateText();
}

function stop() {
  clearInterval(interval);

  interval = null;

  updateText();
}

function updateTime() {
  const minutes = Math.floor(remainingSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (remainingSeconds % 60).toString().padStart(2, '0');
  pomodoroTime.textContent = `${minutes}:${seconds}`;
}

function updateText() {
  if (interval === null) {
    pomodoroAction.textContent = 'start';
  } else {
    pomodoroAction.textContent = 'pouse';
  }
}

pomodoroCounter.addEventListener('click', (e) => {
  if (interval === null) {
    start();
  } else {
    stop();
  }
});

window.onload = () => {
  updateTime();
};
