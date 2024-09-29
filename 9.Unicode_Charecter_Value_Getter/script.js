function detectchar() {
  let input = document.getElementById("inputType").value;
  if (input) {
    const unicodevalue = input.charCodeAt(0);
    const result = `The Unicode value of ${input} is ${unicodevalue}`;
    document.getElementById("result").textContent = result;
  } else {
    document.getElementById("result").textContent = "Please Enter Charecter";
  }
}
