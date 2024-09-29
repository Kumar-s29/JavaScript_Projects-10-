//Loan calculator
document
  .getElementById("calculateBtn")
  .addEventListener("click", calculateLoan);

function calculateLoan() {
  const loanAmount = parseFloat(document.getElementById("loan-amount").value);
  const interestRate = parseFloat(
    document.getElementById("interest-rate").value
  );
  const loanTerm = parseFloat(document.getElementById("loan-term").value);
  if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
    alert("Please enter valid values");
  }
  const monthlyIntrest = interestRate / 100 / 12;
  const totalPayments = loanTerm;
  const monthlyPayment =
    (loanAmount * monthlyIntrest) /
    (1 - Math.pow(1 + monthlyIntrest, -totalPayments));
  const totalIntrest = monthlyPayment * totalPayments - loanAmount;
  displayResult(monthlyPayment, totalIntrest);
}

function displayResult(monthlyPayment, totalIntrest) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `
    <h3>Monthly Payment</h3>
    <p>$${monthlyPayment.toFixed(2)}</p>
    <h3>Total Intrest</h3>
    <p>$${totalIntrest.toFixed(2)}</p>
  `;
}
