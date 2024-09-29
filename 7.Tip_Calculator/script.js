document.getElementById("calculateBtn").addEventListener("click", calculateTip);

function calculateTip() {
  const bill = parseFloat(document.getElementById("bill-amount").value);
  const tipPercentage = parseFloat(
    document.getElementById("tip-percentage").value
  );
  const numberOfPeople = parseInt(
    document.getElementById("number-of-people").value
  );

  if (
    isNaN(bill) ||
    isNaN(tipPercentage) ||
    isNaN(numberOfPeople) ||
    numberOfPeople <= 0
  ) {
    alert("Please enter valid values.");
    return;
  }

  const tipAmount = (bill * tipPercentage) / 100;
  const totalAmount = bill + tipAmount;
  const tipPerPerson = tipAmount / numberOfPeople;
  const totalPerPerson = totalAmount / numberOfPeople;

  document.getElementById("tip-amount").value = tipAmount.toFixed(2);
  document.getElementById("total-amount").value = totalAmount.toFixed(2);
  document.getElementById("tip-per-person").value = tipPerPerson.toFixed(2);
  document.getElementById("total-per-person").value = totalPerPerson.toFixed(2);
}

document.getElementById("resetBtn").addEventListener("click", resetCalculator);

function resetCalculator() {
  document.getElementById("bill-amount").value = "";
  document.getElementById("tip-percentage").value = "5";
  document.getElementById("number-of-people").value = "";
  document.getElementById("tip-amount").value = "";
  document.getElementById("total-amount").value = "";
  document.getElementById("tip-per-person").value = "";
  document.getElementById("total-per-person").value = "";
}
