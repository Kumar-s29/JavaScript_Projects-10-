// BMI_Calculator
document.getElementById("bmiForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const gender = document.getElementById("gender").value;
  const heightFeet = parseInt(document.getElementById("height-feet").value);
  const heightInches = parseInt(document.getElementById("height-inches").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const age = parseInt(document.getElementById("age").value);
  if (gender && age && heightFeet && heightInches && weight) {
    const heightInMeters = (heightFeet * 12 + heightInches) * 0.0254;
    const BMI = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    4;
    const result = document.getElementById("result");
    result.innerHTML = `Your BMI is ${BMI}.`;
    if (BMI < 18.5) {
      result.innerHTML += "<br> You are underweight.";
    } else if (BMI >= 18.5 && BMI < 25) {
      result.innerHTML += "<br> You have a normal weight.";
    } else if (BMI >= 25 && BMI < 30) {
      result.innerHTML += "<br> You are overweight.";
    } else {
      result.innerHTML += "<br> You are obese.";
    }
  }
});
