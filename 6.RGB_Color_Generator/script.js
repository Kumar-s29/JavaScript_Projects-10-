const btn = document.getElementById("btn");
const colorDivs = document.querySelectorAll(".color");

btn.addEventListener("click", function () {
  colorDivs.forEach(function (colorDiv) {
    const rgbColor = getRandomRGBColor();
    colorDiv.style.backgroundColor = rgbColor;
    colorDiv.textContent = rgbColor; // Display the RGB value inside the div
  });
});

// Function to generate a random RGB color
function getRandomRGBColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
