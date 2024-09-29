let dateContainer = document.querySelector(".date-container");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function updateClock() {
  const today = new Date();

  let date = `${weekdays[today.getDay()]}, ${
    months[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()}`;

  let currentHours = formatTime(today.getHours());
  let currentMinutes = formatTime(today.getMinutes());
  let currentSeconds = formatTime(today.getSeconds());

  dateContainer.textContent = date;
  hours.textContent = `${currentHours}:`;
  minutes.textContent = `${currentMinutes}:`;
  seconds.textContent = currentSeconds;
}

setInterval(updateClock, 1000);

updateClock();
