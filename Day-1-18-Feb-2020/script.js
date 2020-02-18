// Alert Element
const alertMsg = document.querySelector('.alert');

// Calculation Elements
const form = document.querySelector('form');
const loanAmt = document.querySelector('#amount');
const loanInterest = document.querySelector('#interest');
const repaYears = document.querySelector('#years');g

// Result Elements
const result = document.querySelector('#results');
const monthlyPay = document.querySelector('#monthly-pay');
const totalPay = document.querySelector('#total-pay');
const totalInt = document.querySelector('#total-int');

// Check required inputs
function checkRequiredInputs(e) {
  // Prevent default submit
  e.preventDefault();

  const amount = Number(loanAmt.value);
  const interest = Number(loanInterest.value);
  const years = Number(repaYears.value);
  const inputArr = [amount, interest, years];

  inputArr.forEach(input => {
    if (input === 0) {
      alertMessage();
    } else if (input > 0) {
      loanCalculation(amount, interest, years);
    }
  });
}

// Alert Message
function alertMessage() {
  alertMsg.textContent = `Inputs can't be zero`;
  alertMsg.style.display = 'block';
  result.style.display = 'none';
}

// Calculation
function loanCalculation(amount, interest, years) {
  const loanPrincipal = amount;
  const actualInterest = interest / 100 / 12;
  const loanPeriod = years * 12;

  const x = Math.pow(1 + actualInterest, loanPeriod);

  const monthlyPayment = (
    (loanPrincipal * actualInterest * x) /
    (x - 1)
  ).toFixed(2);

  const totalPayment = (monthlyPayment * loanPeriod).toFixed(2);
  const toatalInterest = (totalPayment - loanPrincipal).toFixed(2);

  displayResult();
}

// Display result
function displayResult() {
  result.style.display = 'block';
}

// Event Listener
form.addEventListener('submit', checkRequiredInputs);
