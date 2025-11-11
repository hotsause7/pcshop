const timerHours = document.querySelector(".timer__hours");
const timerMinutes = document.querySelector(".timer__minutes");
const timerSeconds = document.querySelector(".timer__seconds");

const setTime = () => {
  const date = new Date();
  const deadLineTime = new Date('12 november 2025').getTime()
  const timeRemaining = (deadLineTime - date) / 1000

  
  const currentHour = Math.floor(timeRemaining / 60 / 60)
  const currentMinute = Math.floor((timeRemaining / 60) % 60)
  const currentSeconds = Math.floor(timeRemaining % 60)
 
 

  const formattedHours = currentHour < 10 ? "0" + currentHour : currentHour;
  const formattedMinutes =
    currentMinute < 10 ? "0" + currentMinute : currentMinute;
  const formattedSeconds =
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds;

  timerHours.textContent = formattedHours;
  timerMinutes.textContent = formattedMinutes;
  timerSeconds.textContent = formattedSeconds;
};

setTime();

setInterval(setTime, 500)

