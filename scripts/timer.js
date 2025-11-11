const timerHours = document.querySelector(".timer__hours");
const timerMinutes = document.querySelector(".timer__minutes");
const timerSeconds = document.querySelector(".timer__seconds");
const timerDays = document.querySelector(".timer__days");

let interval;

const numWord = (value) => {
  value = Math.abs(value) % 100;
  const lastNum = value % 10;
  const words = ["секунда", "секунды", "секунд"];

  if ((value >= 10) & (value < 20)) return words[2];
  if (lastNum > 1 && lastNum < 5) return words[1];
  if (lastNum === 1) return words[0];
  return words[2];
};

const setTime = () => {
  const date = new Date();
  const deadLineTime = new Date("12 november 2025 10:00").getTime();
  const timeRemaining = (deadLineTime - date) / 1000;

  const currentDay = Math.floor(timeRemaining / 60 / 60 / 24);
  const currentHour = Math.floor((timeRemaining / 60 / 60) % 24);
  const currentMinute = Math.floor((timeRemaining / 60) % 60);
  const currentSeconds = Math.floor(timeRemaining % 60);

  const formattedDays = currentDay < 10 ? "0" + currentDay : currentDay;
  const formattedHours = currentHour < 10 ? "0" + currentHour : currentHour;
  const formattedMinutes =
    currentMinute < 10 ? "0" + currentMinute : currentMinute;
  const formattedSeconds =
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;

  timerHours.textContent = formattedHours;
  timerMinutes.textContent = formattedMinutes;
  timerSeconds.textContent = formattedSeconds;
  timerDays.textContent = formattedDays;

  timerSeconds.nextElementSibling.textContent = numWord(formattedSeconds);

  if (timeRemaining <= 0) {
    clearInterval(interval);
    timerDays.textContent = "0";
    timerHours.textContent = "0";
    timerMinutes.textContent = "0";
    timerSeconds.textContent = "0";
    timerDays.style.color = "red";
    timerHours.style.color = "red";
    timerMinutes.style.color = "red";
    timerSeconds.style.color = "red";
  }
};

interval = setInterval(setTime, 500);
