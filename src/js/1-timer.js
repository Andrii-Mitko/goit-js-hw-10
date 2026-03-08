import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let selectedDate = null;
let timerId = null;

startBtn.disabled = true;

flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  dateFormat: "Y-m-d H:i",
  minuteIncrement: 1,
  defaultDate: new Date(),

  onClose(selectedDates) {
    selectedDate = selectedDates[0];

    if (selectedDate <= new Date()) {
      startBtn.disabled = true;

      iziToast.error({
        message: "Please choose a date in the future"
      });

      return;
    }

    startBtn.disabled = false;
  }
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addZero(value) {
  return String(value).padStart(2, "0");
}

function updateTimer() {
  const delta = selectedDate - new Date();

  if (delta <= 0) {
    clearInterval(timerId);

    input.disabled = false;
    startBtn.disabled = true;

    daysEl.textContent =
      hoursEl.textContent =
      minutesEl.textContent =
      secondsEl.textContent =
        "00";

    return;
  }

  const { days, hours, minutes, seconds } = convertMs(delta);

  daysEl.textContent = addZero(days);
  hoursEl.textContent = addZero(hours);
  minutesEl.textContent = addZero(minutes);
  secondsEl.textContent = addZero(seconds);
}

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  input.disabled = true;

  updateTimer();
  timerId = setInterval(updateTimer, 1000);
});

