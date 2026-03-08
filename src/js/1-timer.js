
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let selectedDate = null;
let timerId = null;


flatpickr(input, {
  enableTime: true,
  time_24hr: true,
  dateFormat: "Y-m-d H:i",
  defaultDate: new Date(),
  onClose: (dates) => {
    selectedDate = dates[0];
    if (selectedDate < new Date()) {
      alert("Обрано минулу дату!");
      selectedDate = null;
    }
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

function updateTimer() {
  const now = new Date();
  const delta = selectedDate - now;

  if (delta <= 0) {
    clearInterval(timerId);
    daysEl.textContent = hoursEl.textContent = minutesEl.textContent = secondsEl.textContent = '00';
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(delta);
  daysEl.textContent = String(days).padStart(2, '0');
  hoursEl.textContent = String(hours).padStart(2, '0');
  minutesEl.textContent = String(minutes).padStart(2, '0');
  secondsEl.textContent = String(seconds).padStart(2, '0');
}

startBtn.addEventListener('click', () => {
  if (!selectedDate) return alert('Выбери дату!');
  clearInterval(timerId);
  updateTimer();
  timerId = setInterval(updateTimer, 1000);
});