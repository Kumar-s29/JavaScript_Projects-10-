const counterDisplay = document.getElementById("counterDisplay");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

let counter = 0;

function updateCounterDisplay() {
  counterDisplay.textContent = counter;

  if (counter > 0) {
    counterDisplay.style.color = "green";
  } else if (counter < 0) {
    counterDisplay.style.color = "red";
  } else {
    counterDisplay.style.color = "black";
  }
}

incrementBtn.addEventListener("click", () => {
  counter++;
  updateCounterDisplay();
});

decrementBtn.addEventListener("click", () => {
  counter--;
  updateCounterDisplay();
});

resetBtn.addEventListener("click", () => {
  counter = 0;
  updateCounterDisplay();
});
